exports.ids = [4];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/aistier_logo.3642e67.png";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/vetec_logo.0bdfa76.png";

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.4d2d997.png";

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/m_logo.00f9a34.png";

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=2d0f2c92&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"vetec_logo\">"+((_vm.company.name === 'AIStier')?("<span><img"+(_vm._ssrAttr("src",__webpack_require__(101)))+" alt=\"vetec\" class=\"m_hidden\"></span>"):("<span><img"+(_vm._ssrAttr("src",__webpack_require__(102)))+" alt=\"vetec\" class=\"m_hidden\"></span>"))+"</div> <form name=\"form\" id=\"loginForm\" method=\"post\" action=\"fnb/j_security_check\"><div id=\"login\"><div class=\"login_logo\"><img"+(_vm._ssrAttr("src",__webpack_require__(103)))+" alt=\"BomPeaklogo\" class=\"m_hidden\"> <img"+(_vm._ssrAttr("src",__webpack_require__(104)))+" alt=\"BomPeaklogo\" class=\"m_show\"> <h4>Lite ver.</h4> <h2>BOM-PEAK</h2></div> <div class=\"login_text\"><h6>Welcome BOM-PEAK</h6> <p>Login to explore more about BOM-PEAK</p></div> <div class=\"loginBox\"><div class=\"form\"><input type=\"text\" placeholder=\"ID\" name=\"j_username\""+(_vm._ssrAttr("value",(_vm.id)))+"></div> <div class=\"form\"><input type=\"password\" placeholder=\"PASSWORD\" name=\"j_password\""+(_vm._ssrAttr("value",(_vm.password)))+"></div> <a class=\"btnLogin\">LOGIN</a> <p class=\"copyright\">"+_vm._ssrEscape("Copyright© 2019 by "+_vm._s(_vm.company.name)+" Corp. All rights reserved.")+"</p></div></div></form> "),_c('flashModal',{attrs:{"propsdata":_vm.modalMessage}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=2d0f2c92&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(6);

// CONCATENATED MODULE: /usr/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/flashmodal.vue?vue&type=template&id=7ec4e9f7&
var flashmodalvue_type_template_id_7ec4e9f7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('b-modal',{attrs:{"title":"알림","ok-only":""},model:{value:(_vm.propsdata.show),callback:function ($$v) {_vm.$set(_vm.propsdata, "show", $$v)},expression:"propsdata.show"}},[_c('div',[_vm._v("\n      "+_vm._s(_vm.propsdata.msg)+"\n    ")])])],1)}
var flashmodalvue_type_template_id_7ec4e9f7_staticRenderFns = []


// CONCATENATED MODULE: ./components/flashmodal.vue?vue&type=template&id=7ec4e9f7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/flashmodal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var flashmodalvue_type_script_lang_js_ = ({
  props: ['propsdata']
});
// CONCATENATED MODULE: ./components/flashmodal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_flashmodalvue_type_script_lang_js_ = (flashmodalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/flashmodal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_flashmodalvue_type_script_lang_js_,
  flashmodalvue_type_template_id_7ec4e9f7_render,
  flashmodalvue_type_template_id_7ec4e9f7_staticRenderFns,
  false,
  null,
  null,
  "460dda72"
  
)

/* harmony default export */ var flashmodal = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
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


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  layout: 'login',
  components: {
    flashModal: flashmodal
  },

  data() {
    return {
      id: '',
      password: '',
      company: {
        name: 'VETEC'
      },
      modalMessage: {
        msg: '',
        show: false
      } //로그인 안내모달에 사용할 msg

    };
  },

  mounted: function () {
    document.body.className = 'login-body';
    this.urlChk();
    this.roleChk();
  },

  destroyed() {
    document.body.className = '';
  },

  methods: {
    async login() {
      if (this.id === null || this.id === "") {
        alert("ID를 입력해주세요");
        this.$refs.id.focus();
        return;
      } else if (this.password === null || this.password === "") {
        alert("패스워드를 입력해주세요");
        this.$refs.password.focus();
        return;
      }

      try {
        await this.$store.dispatch('login', {
          id: this.id,
          password: this.password
        }).then(() => {
          if (this.$store.getters.length != 0) {
            this.redirect();
          } else {
            console.log(this.$store.getters.ID);
          }
        }).catch(e => {
          console.log(e);
          this.modalMessage.msg = e.message;
          this.modalMessage.show = true;
        });
      } catch (e) {
        console.log(e);
        this.modalMessage.msg = e.message;
        this.modalMessage.show = true;
      }
    },

    urlChk() {
      var currentUrl = window.location.host;

      if (currentUrl === "peak.aistier-bom.com") {
        this.company.name = "AIStier";
      } else {
        this.company.name = "VETEC";
      }
    },

    roleChk() {
      var roleChk = this.$route.query.code;

      if (roleChk) {
        this.modalMessage.msg = "해당솔루션 권한이 없습니다.";
        this.modalMessage.show = true;
        this.$router.push('/login');
      }
    },

    redirect() {
      this.$router.push('/dashboard');
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/login.vue





/* normalize component */

var login_component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b5ab93e2"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (login_component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map