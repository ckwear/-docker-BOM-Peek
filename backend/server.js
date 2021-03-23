const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db');

const app = express();
app.use('/static', express.static('./views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// db.pool.query(`CREATE TABLE lists (
//     id INTEGER AUTO_INCREMENT,
//     value TEXT,
//     PRIMARY KEY (id)
// )`, (err, results, fileds) => {
//     console.log('results', results)
// })
app.get('/api/index', function (req, res) {
    //데이테베이스에서 모든 정보 가져오기 
    
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/api/values', (req, res) => {
    console.log('wefewf')
});

app.post('/api/value', (req, res, next) => {
    
    // console.log('wefewf')    
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body['tagName']}")`,
    (err, results, fileds) => {
        console.log(err)
        console.log(req.body['tagName'])
    });
});

app.listen(5000, () => {
    console.log("애플리케이션이 5000번 포트에서 시작되었습니다.")
})