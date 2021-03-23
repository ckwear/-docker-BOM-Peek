const express = require('express');
const app = express();
const request = require('request');
const btoa = require('btoa');
const pool = require('../config/database');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passwordHash = require('../lib/passwordHash');



passport.serializeUser(function (user, done) {
  //user.Password = "";
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  var user = user;
  //result.Password = "";
  done(null, user);
});

passport.use(new LocalStrategy({
      usernameField: 'id',
      passwordField : 'password',
      passReqToCallback : true
    },
    async function (req, id, password, done) {
      let conn;

      console.log("passport 진입");
      try {
        conn = await pool.getConnection();
        console.log("pool 생성완료");
        // console.log(conn);
        const roleQuery =`SELECT role FROM tbl_users WHERE id = '${id}'`;
        const role = await conn.query(roleQuery);

        const roleResult = role[0]['role'];
        console.log("------------role");
        console.log(roleResult);

        const condition = ['ROLE_PL1', 'ROLE_PL2'];
        var user;
        const result = await conn.query('CALL usp_get_users(?, ?)', [id, passwordHash(password)]);
        console.log(result)

        user = result[0][0];
        console.log(user)
        console.log("------------user");
        console.log(user.ID);

        if(typeof user === 'undefined'){
          return done(null, false, { message: '아이디 또는 비밀번호 오류 입니다.' });
          console.log("undefined");
        }
        else if(typeof user !== 'undefined'){
          if(roleResult.indexOf("PL") !== -1){
            req.session.authUser = user;
            const access_result = await conn.query('CALL usp_set_upd_last_access(?)', [id]);

            console.log("로그인성공");
            return done(null, user, { message: '로그인 성공' });
          }
          else{
            console.log("서비스신청안함");
            return done(null, false, { message: '해당 서비스를 신청하지 않았습니다.' });
          }
        }

      }catch(error) {
        return done(null, false, { message: '아이디가 없습니다.' });
        throw new Error(error);
      }
      finally{
        if(conn){
          conn.release();
        }
      }
    }
));

app.post('/user/login', function(req, res, next) {
      console.log("/user/login");
      passport.authenticate('local', function(err, user, info) {
        if (err) {
          next(err);
          // res.json({
          //   message : '에러가 발생했습니다. 잠시 후 다시 시도해주시기 바랍니다.'
          // });
        }
        if (!user) {
          res.status(401);
          res.json({
            message : info.message,
            result : 'login fail'
          });
          return;
        }
        req.logIn(user, function(err) {
          if (err) {
            next(err);
          }
          res.status(200);
          res.json({
            result : 'login success',
            "ID" : user["ID"],
            "Role" : user["Role"],
          });
          return;
        });
      })(req, res, next);
    }
);

// app.post('/user/login' ,
//     passport.authenticate('local', {
//         failureRedirect: '/login',
//         failureFlash: true
//     }),
//     function(req, res){
//       //res.send('<script>alert("로그인 성공");location.href="/";</script>');
//       res.redirect('/');
//     }
// );

//로그아웃
app.get('/user/logout', function(req, res){
  delete req.session.authUser;
  req.logout();
  res.redirect('/');
});


//WEBACCESS-Login-Function
app.get('/WaLogin', function (req, res) {
  let myUserName = "admin";
  let myPassword = "vetec1";
  let userPass = btoa(myUserName + ":" + myPassword);
  let url = "http://112.216.32.4/WaWebService/Json/Login";
  request({
    method: 'get',
    url: url,
    headers: {
      'Authorization': 'Basic ' + userPass,
      'Accept': 'application/json',
      'LoginType': 'View',
      "cache-control": "no-cache",
      'Content-Type': 'application/json; charset=utf-8',
    },
  }, function (error, response, body) {
    console.log("로그인호출완료");
    res.json({
      code: 0,
      msg: "로그인완료"
    });
  });
});


//WEBACCESS TAG 호출
app.post('/getTagValues', function(req, res){
  let myUserName = "admin";
  let myPassword = "vetec1";
  let myProjName = "BOM";
  let role = req.query.role;
  let myTagList = ["NodeStatus", role + "_COM_Status*00M", role + "_W_Status*00M",
    role + "_Past_Time*00M", role + "_DC_mm*00M", role + "_DC_S*00M",
    role + "_kW_Target*00M", role + "_kW_Current*00M", role + "_kW_Pre*00M", role + "_kW_Base*00M",
    role + "_Peak_B*00M", role + "_Peak_D*00M", role + "_Peak_M*00M", role + "_Peak_Y*00M",
    role + "_Peak_D_H*00M", role + "_Peak_D_mm*00M",
    role + "_Peak_M_D*00M", role + "_Peak_M_H*00M", role + "_Peak_M_mm*00M",
    role + "_Peak_Y_Y*00M", role + "_Peak_Y_M*00M", role + "_Peak_Y_D*00M", role + "_Peak_Y_H*00M", role + "_Peak_Y_mm*00M",

  ];
  let userPass = btoa(myUserName + ":" + myPassword);
  let dataParam = {};
  let tagObjectList = [];
  for (let i = 0; i < myTagList.length; i++)
  {
    let tagObject = {};
    tagObject["Name"] = myTagList[i];
    tagObjectList.push(tagObject);
  }
  dataParam["Tags"] = tagObjectList;
  let url = "http://112.216.32.4/WaWebService/Json/GetTagValue/" + myProjName;
  request({
    url: url,
    method:'POST',
    headers: {
      'Authorization': 'Basic '+ userPass,
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: dataParam,
    json: true
  }, function(error, response, body){
    //res.send(body["Values"]);
    res.json(body);
  });
});

//사용자알람설정(select)
app.get('/AlarmSetting', async function(req,res){
  console.log("Alarm 업데이트");
  console.log(req.query);
  let id = req.query.id;
  let AlarmEnable = req.query.AlarmEnable;
  let DoNotDisturbStartTime = req.query.DoNotDisturbStartTime;
  let DoNotDisturbEndTime = req.query.DoNotDisturbEndTime;
  let AlarmClear = req.query.AlarmClear;
  let AlarmStep1 = req.query.AlarmStep1;
  let AlarmStep2 = req.query.AlarmStep2;
  let AlarmStep3 = req.query.AlarmStep3;
  let conn;
  try {
    if(id === null || id==="") {
      res.json({code: 2})
    }else {
      conn = await pool.getConnection();
      const result = await conn.query('CALL usp_set_peak_alarm(?, ?, ?, ?, ?, ?, ?, ?)', [id, AlarmEnable, DoNotDisturbStartTime, DoNotDisturbEndTime, AlarmClear, AlarmStep1, AlarmStep2, AlarmStep3]);
      res.json({code: 1})
    }
  }catch(error) {
    res.json({
      message : '응답이 없습니다. 새로고침 후 다시 시도하시기 바랍니다.'
    });
  } finally{
    if(conn){
      conn.release();
    }
  }
});

//사용자알람설정(UPDATE)
app.get('/getAlarmInfo', async function(req,res){
  console.log("Alarm select");
  let conn;
  try {
    conn = await pool.getConnection();
    let query =`SELECT AlarmEnable,DoNotDisturbStartTime,DoNotDisturbEndTime,AlarmClear,AlarmStep1,AlarmStep2,AlarmStep3  FROM tbl_bom_peak_alarm WHERE UserID= '${req.query.id}'`;
    let queryResult = await conn.query(query);
    console.log(queryResult[0]);
    res.json({
      code: 1,
      value: queryResult
    })
  }catch(error) {
    res.json({
      message : '응답이 없습니다. 새로고침 후 다시 시도하시기 바랍니다.'
    });
  } finally{
    if(conn){
      conn.release();
    }
  }
});

//알람히스토리 검색(select)
app.get('/getAlarm', async function(req,res){
  console.log("Alarm 검색");
  console.log(req.query.id);
  let conn;
  try {
    conn = await pool.getConnection();
    //var query =`SELECT Priority,Description,Action,DayOfWeek,LogDate,LogTime FROM tbl_bom_alarm WHERE UserID= '${req.query.id}'`;
    const result = await conn.query('CALL usp_get_peak_alarm_list(?)', [req.query.id]);

    res.json({
      code: 1,
      value: result[0]
    })
  }catch(error) {
    res.json({
      message : '응답이 없습니다. 새로고침 후 다시 시도하시기 바랍니다.'
    });
  } finally{
    if(conn){
      conn.release();
    }
  }
});

//모듈로 사용할 수 있도록 export
//앱의 /api/* 라우트로 접근하는 모든 요청은 모두 app인스턴스에게 전달됨
module.exports = {
  path: '/api',
  handler: app
};
