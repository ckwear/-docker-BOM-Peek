<template>
  <div>
    <div class="vetec_logo">
      <span v-if="company.name === 'AIStier'">
        <img src="~assets/img/Lite/login/aistier_logo.png" alt="vetec" class="m_hidden"/>
      </span>
      <span v-else>
        <img src="~assets/img/Lite/login/vetec_logo.png" alt="vetec" class="m_hidden"/>  
      </span>
    </div>
    <form name="form" id="loginForm" method="post" action="fnb/j_security_check">
      <div id="login">
        <div class="login_logo">
          <img src="~assets/images/Lite/login/logo.png" alt="BomPeaklogo" class="m_hidden"/>
          <img src="~assets/images/Lite/login/m_logo.png" alt="BomPeaklogo" class="m_show"/>
          <h4>Lite ver.</h4>
          <h2>BOM-PEAK</h2>
        </div>
        <div class="login_text">
          <h6>Welcome BOM-PEAK</h6>
          <p>Login to explore more about BOM-PEAK</p>
        </div>
        <div class="loginBox">
          <div class="form">
            <input type="text" placeholder="ID" v-model="id" ref="id" name="j_username" />
          </div>
          <div class="form">
            <input type="password" placeholder="PASSWORD" v-model="password" ref="password" name="j_password" v-on:keyup.13="login" />
          </div>
          <a class="btnLogin" @click="login">LOGIN</a>
          <p class="copyright">Copyright&copy; 2019 by {{company.name}} Corp. All rights reserved.</p>
        </div>
      </div>
    </form>
    <flashModal v-bind:propsdata ="modalMessage"/>
  </div>
</template>
<script>
  import axios from 'axios'
  import flashModal from '~/components/flashmodal.vue'
  export default {
    layout:'login', 
    components: {
      flashModal
    },
    data () {
      return {
        id: '',
        password:'',
        company: {
         name:'VETEC'
        },
        modalMessage: {
          msg :'',
          show: false
        },//로그인 안내모달에 사용할 msg
      }
    },
    mounted: function() {
      document.body.className = 'login-body';
      this.urlChk();    
      this.roleChk();
    }, 
    destroyed() { 
      document.body.className = '';
    },
    methods: {
      async login () {
        if(this.id === null || this.id ==="") {
          alert("ID를 입력해주세요");
          this.$refs.id.focus()
          return
        }else if(this.password === null || this.password ==="") {
          alert("패스워드를 입력해주세요");
          this.$refs.password.focus()
          return
        }
        try {
          await this.$store.dispatch('login', {
            id: this.id,
            password: this.password
          }).then(() => {
            if(this.$store.getters.length != 0) {
              this.redirect()
            }else {
              console.log(this.$store.getters.ID)
            }
          })
          .catch((e)=> {
            console.log(e)
            this.modalMessage.msg = e.message
            this.modalMessage.show = true
          })
        } catch (e) {
            console.log(e)
          this.modalMessage.msg = e.message
          this.modalMessage.show = true
        }
      },
      urlChk() {

        var currentUrl = window.location.host
        
        if(currentUrl === "peak.aistier-bom.com") {
          this.company.name = "AIStier"
        }else {
          this.company.name = "VETEC"
        }
      
      },
      roleChk() {
        var roleChk = this.$route.query.code
        if(roleChk) {
          this.modalMessage.msg = "해당솔루션 권한이 없습니다."
          this.modalMessage.show = true 
          this.$router.push('/login')
        } 
      },
      redirect () {
        this.$router.push('/dashboard')
      }
  }
}
</script>