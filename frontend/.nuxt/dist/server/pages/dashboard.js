exports.ids = [2];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/loading.33862c1.gif";

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=template&id=67c79170&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"wrap"}},[_vm._ssrNode("<section><div id=\"Nav_title\" class=\"m_hidden\"><h1>Dashboard</h1></div> <div id=\"lite_typeMain\"><div class=\"current_stat\"><div class=\"current_time m_hidden\"><p class=\"date\">"+_vm._ssrEscape(_vm._s(_vm.nowDate)+" "+_vm._s(_vm.nowDay))+"</p> <p class=\"time\">"+_vm._ssrEscape(_vm._s(_vm.nowTime2))+"</p></div> "+((_vm.warning.Value === 0)?("<div><div class=\"caution_box widget_box g_bg\"><p>현재</p> <p>경고상태는</p> <p><span>정상</span>입니다.</p> <p class=\"time m_show\">"+_vm._ssrEscape(_vm._s(_vm.nowTime))+"</p></div></div>"):"<!---->")+" "+((_vm.warning.Value === 1)?("<div><div class=\"caution_box widget_box y_bg\"><p>현재</p> <p>경고상태는</p> <p><span>1단계</span>입니다.</p> <p class=\"time m_show\">"+_vm._ssrEscape(_vm._s(_vm.nowTime))+"</p></div></div>"):(_vm.warning.Value === 2)?("<div><div class=\"caution_box widget_box o_bg\"><p>현재</p> <p>경고상태는</p> <p><span>2단계</span>입니다.</p> <p class=\"time m_show\">"+_vm._ssrEscape(_vm._s(_vm.nowTime))+"</p></div></div>"):(_vm.warning.Value === 3)?("<div><div class=\"caution_box widget_box r_bg\"><p>현재</p> <p>경고상태는</p> <p><span>3단계</span>입니다.</p> <p class=\"time m_show\">"+_vm._ssrEscape(_vm._s(_vm.nowTime))+"</p></div></div>"):"<!---->")+" "+((_vm.warning.Value != 0 && _vm.warning.Value != 1 && _vm.warning.Value != 2 && _vm.warning.Value != 3   )?("<div><div class=\"caution_box widget_box gray_bg\"><p>현재</p> <p>경고상태를</p> <p><span>분석 중</span>입니다.</p> <p class=\"time m_show\">"+_vm._ssrEscape(_vm._s(_vm.nowTime))+"</p></div></div>"):"<!---->")+" <div class=\"demand_time widget_box m_hidden\"><h4>수요시한</h4> <h2>"+_vm._ssrEscape(_vm._s(_vm.demandTime))+"</h2></div></div> <div class=\"statusList\"><div ng-switch on=\"role\"><div class=\"item widget-type1\"><div class=\"ibox widget_box\"><h4>목표전력</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_User_Peak'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_User_Peak'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" <h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'kW_Target*00M', _vm.role),0))+" ")+"<span>kW</span></h2></div></div> <div class=\"item widget-type1\"><div class=\"ibox widget_box\"><h4>예측전력</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_Pdc'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_Pdc'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" <h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'kW_Pre*00M', _vm.role),0))+" ")+"<span>kW</span></h2></div></div> <div class=\"item widget-type1\"><div class=\"ibox widget_box\"><h4>현재전력</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_Now_MD'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_Now_MD'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" <h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'kW_Current*00M', _vm.role),0))+" ")+"<span>kW</span></h2></div></div> <div class=\"item widget-type1\"><div class=\"ibox widget_box\"><h4>기준전력</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_Base'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_Base'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" <h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'kW_Base*00M', _vm.role),0))+" ")+"<span>kW</span></h2></div></div> <div class=\"item widget-type2\"><div class=\"ibox widget_box\"><h4>직전최대피크</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_Peak_Before_M'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_Peak_Before_M'),0))+" kW")+"</h2></div>"):"<!---->")+" <h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'Peak_B*00M', _vm.role),0)))+"<span class=\"unit\">kW</span></h2></div></div> <div class=\"item widget-type2\"><div class=\"ibox widget_box\"><h4>일 최대피크</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_Peak_Day'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_Peak_Day'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" <h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'Peak_D*00M', _vm.role),0)))+"<span class=\"unit\">kW</span></h2></div></div> <div class=\"item widget-type2\"><div class=\"ibox widget_box\"><h4>월 최대피크</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_Peak_Mon'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_Peak_Mon'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" <h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'Peak_M*00M', _vm.role),0))+"\n\t\t\t\t\t\t\t\t")+"<span class=\"unit\">kW</span></h2></div></div> <div class=\"item widget-type2\"><div class=\"ibox widget_box\"><h4>연 최대피크</h4> "+((_vm.role ==='ROLE_PL1')?("<div><h2>"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL1_kW_Peak_Year'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" "+((_vm.role ==='ROLE_PL2')?("<div><h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'PL2_kW_Peak_Year'),0))+" ")+"<span>kW</span></h2></div>"):"<!---->")+" <h2 class=\"no-margins\">"+_vm._ssrEscape(_vm._s(_vm._f("numberFormat")(_vm._f("pickValue")(_vm.tagVal,'Peak_Y*00M',_vm.role),0))+" ")+"<span>kW</span></h2></div></div></div></div> <div class=\"demanad_time_wrap m_show\"><div class=\"demand_time widget_box\"><h4>수요시한</h4> <h2>"+_vm._ssrEscape(_vm._s(_vm.demandTime))+"</h2></div></div></div></section> <div"+(_vm._ssrStyle(null,null, { display: (_vm.tagVal < 0) ? '' : 'none' }))+"><div class=\"loading\"><img"+(_vm._ssrAttr("src",__webpack_require__(100)))+" alt=\"loading\"> <p>서버와의 연결이 끊어졌습니다. </p> <p>연결 재시도 중입니다.</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=template&id=67c79170&

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(7);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  fetch({
    store,
    redirect
  }) {
    if (!store.state.authUser) {
      return redirect('/');
    }
  },

  layout: 'template',
  components: {
    moment: external_moment_default.a,
    axios: external_axios_default.a
  },

  data() {
    return {
      role: '',
      //사용자롤
      userInfo: '',
      //사용자정보
      id: '',
      //사용자 아이디 저장
      tagVal: [],
      //Web-Access tag 정보저장
      warning: '',
      week: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      nowDate: external_moment_default()(new Date()).format('YYYY-MM-DD'),
      nowDay: external_moment_default()(new Date()).day() - 1,
      nowTime: external_moment_default()(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      //현재시간
      nowTime2: external_moment_default()(new Date()).format('HH:mm:ss'),
      //현재시간
      interval: null,
      //인터벌함수(tag 가져옴)
      demandTime: '..연결중' //수요시간,

    };
  },

  created() {
    this.id = this.$store.getters.ID;
    this.role = this.$store.getters.Role;
    console.log(this.role);
  },

  mounted() {
    document.body.className = '';
    this.WaLogin();
    this.getTagValues();
    this.nowDay = this.week[this.nowDay];
    this.resetInterval();
  },

  filters: {
    numberFormat(target, limit) {
      if (target == undefined) {
        return 0;
      } else {
        if (typeof target === 'number') {
          var number = Number(target).toFixed(limit);
          return number;
        } else {
          return 0;
        }
      }
    },

    pickValue(object, key, role) {
      key = role + '_' + key;

      if (object === undefined || object === null || object === "") {
        return "응답대기중";
      } else {
        let target = object.filter(object => object.Name === key);

        if (target.length === 0) {
          return -1;
        } else {
          return target[0].Value;
        }
      }
    }

  },

  destroyed() {
    this.removeInterval();
  },

  methods: {
    //WaLogin
    WaLogin: async function () {
      external_axios_default.a.get('/api/WaLogin').then(function (res) {
        console.log("로그인 성공");
        console.log(res);
      }).catch(function (error) {
        console.log("Login실패");
        console.log(error);
      });
    },
    //WEBACCESS Tag값 가져오기
    getTagValues: async function () {
      var vm = this;
      external_axios_default()({
        method: 'post',
        url: '/api/getTagValues',
        params: {
          role: vm.role
        }
      }).then(function (res) {
        console.log(res.data);

        if (res.data.Result['Total'] > 0) {
          var temp = res.data.Values;
          vm.tagVal = temp;
        } else {
          console.log("Webaccess 정보가져오기 실패");
        }
      }).catch(function (error) {
        console.log("api/getTagValues 에러발생/Dashboard 호출");
        console.log(error);
      });
    },
    deviceStatus: function () {
      var vm = this;
      var temp = vm.tagVal;
      var warningStat = "";

      if (vm.role === "ROLE_PL1") {
        warningStat = temp.filter(temp => temp.Name == 'PL1_STA_Warning');
      } else if (vm.role === "ROLE_PL2") {
        warningStat = temp.filter(temp => temp.Name == 'PL2_STA_Warning');
      } else {
        warningStat = temp.filter(temp => temp.Name == vm.role + '_W_Status*00M');
      }

      if (warningStat.length === 0) {
        this.warning = -1;
      } else {
        this.warning = warningStat[0];
      }
    },
    getNowTime: function () {
      this.nowTime = external_moment_default()(new Date()).format('YYYY-MM-DD HH:mm:ss');
      this.nowTime2 = external_moment_default()(new Date()).format('HH:mm:ss');
    },
    getdemandTime: function () {
      var vm = this;
      var temp = this.tagVal;
      var demand = "";

      if (vm.role === "ROLE_PL1") {
        demand = temp.filter(temp => temp.Name == 'PL1_Dmd_Time_S');
      } else if (vm.role === "ROLE_PL2") {
        demand = temp.filter(temp => temp.Name == 'PL2_Dmd_Time_S');
      } else {
        demand = temp.filter(temp => temp.Name == vm.role + '_Past_Time*00M');
      }

      if (demand.length === 0) {
        this.warning = '연결대기중';
      } else {
        var d = new Date(1970, 0, 1).setSeconds(demand[0].Value);

        if (demand == null || demand === '' || demand === undefined) {
          this.demandTime = '연결중..';
        } else {
          this.demandTime = external_moment_default()(d).format('mm:ss');
        }

        this.demandPercent = (900 - demand[0].Value) / 900 * 100;
      }
    },
    //Interval 시작
    resetInterval: function () {
      var vm = this;
      clearInterval(this.interval);
      this.interval = setInterval(function () {
        vm.getNowTime();
        vm.getTagValues(); //vm.getTagValues2();

        if (vm.tagVal != "" || vm.tagVal != null) {
          vm.getdemandTime();
          vm.deviceStatus();
        }
      }, 1000);
    },
    //인터벌삭제
    removeInterval: function () {
      clearInterval(this.interval);
    },
    logout: async function () {
      external_axios_default.a.get('/api/user/logout');
      this.$router.push('/');
    }
  }
});
// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/dashboard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3190acba"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard.js.map