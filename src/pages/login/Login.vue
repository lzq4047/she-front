<template>
  <div class="login" id="particles-js">
    <div class="logo">
      <img src="../../assets/logo-she.png" width="100px" alt="校园二手书线下交易平台">
    </div>
    <div class="login-box">
      <div class="login-box-header">
        <h2 class="login-box__title">欢迎你</h2>
      </div>
      <div class="login-box-body">
        <she-form>
          <she-form-item :rules="[{strategy: 'isRequired', message: '请输入用户名', trigger: 'blur'}]" prop="username">
            <she-input v-model="loginForm.username" plain ellipse placeholder="用户名">
              <span class="iconfont icon-username" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <she-input v-model="loginForm.password" type="password" plain ellipse placeholder="密码">
              <span class="iconfont icon-password" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <div class="validate-field">
              <she-input class="validate-field__input" v-model="validateCode" plain ellipse placeholder="验证码">
                <span class="iconfont icon-validate-code" slot="prepend"></span>
              </she-input>
              <img ref="validateFieldImg" class="validate-field__code" src="/api/verifyCode" alt="点击切换验证码" @click="changeCode">
            </div>
          </she-form-item>
          <she-form-item>
            <she-button @click="login" type="primary" block ellipse>Login</she-button>
          </she-form-item>
          <she-form-item>
            <p class="account-operations">
              <she-button type="primary" text>
                <router-link :to="{name: 'register'}" tag="span">注册</router-link>
              </she-button>
              <she-button type="primary" text link>
                <router-link :to="{name: 'appeal'}" tag="span">忘记密码？找回</router-link>
              </she-button>
            </p>
          </she-form-item>
        </she-form>
      </div>
    </div>
  </div>
</template>

<script>
import 'particles.js'
import SHA256 from 'crypto-js/sha256'
export default {
  name: 'login',
  data: function () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      validateCode: ''
    }
  },
  methods: {
    login: async function () {
      const valid = await this.checkValidateCode()
      if (valid) {
        this.$http.post('/api/session', Object.assign({}, this.loginForm, {
          password: SHA256(this.loginForm.password).toString()
        })).then(res => {
          if (res.data.code === '0') {
            localStorage.setItem('SHE_TOKEN', res.data.data.authorization)
            this.$router.push({
              name: 'index'
            })
          } else {
            console.log('用户名或密码不正确')
          }
        }).catch(err => {
          console.error(err)
        })
      } else {
        console.log('验证码错误')
        this.changeCode()
      }
    },
    checkValidateCode: function () {
      return new Promise((resolve, reject) => {
        this.$http.post(`/api/checkImg/${this.validateCode}`).then(res => {
          resolve(res.data.data)
        }).catch(err => {
          console.error(err)
          reject(false)
        })
      })
    },
    changeCode: function () {
      this.$refs.validateFieldImg.setAttribute('src', `/api/verifyCode?${(new Date().getTime())}`)
    }
  },
  created: function () {
  },
  mounted: function () {
    window.particlesJS.load('particles-js', 'static/particlesjs-config.json', function () {
      console.log('callback - particles.js config loaded')
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/theme.scss";
.logo{
  position: absolute;
  top: 10px;
  left: 10px;
}
.login{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('./login-bg.jpg') center center;
  background-size: 100% auto;
}
.login-box{
  position: absolute;
  padding-top: 30px;
  display: inline-flex;
  width: 400px;
  flex-direction: column;
  transform: translateY(-10%);
  
  color: $color-white;
  box-shadow: 0 0 100px 20px rgba(0,0,0,0.3) inset;
}
.login-box-header {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 18px;
}
.login-box-body{
  padding: 20px;
}
.validate-field{
  display: flex;
  align-items: center;
}
.validate-field__input{
  flex: 1;
  margin-right: 15px;
}
.validate-field__code{
  width: 100px;
  max-height: 36px;
}
.account-operations{
  width: 100%;
  text-align: right;
}
</style>


