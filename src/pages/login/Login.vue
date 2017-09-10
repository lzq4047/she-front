<template>
  <div class="login" id="particles-js">
    <div class="login-box">
      <div class="login-box-header">
        <h2 class="login-box__title">欢迎你</h2>
      </div>
      <div class="login-box-body">
        <she-form>
          <she-form-item>
            <she-input v-model="loginForm.username" plain ellipse>
              <span class="iconfont icon-username" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <she-input v-model="loginForm.password" type="password" plain ellipse>
              <span class="iconfont icon-password" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <she-button @click="login" type="primary" block ellipse>Login</she-button>
          </she-form-item>
        </she-form>
      </div>
    </div>
  </div>
</template>

<script>
import SheInput from 'components/common/input/Input'
import SheButton from 'components/common/button/Button'
import SheForm from 'components/common/form/Form'
import SheFormItem from 'components/common/form/FormItem'

import particlesJS from 'particles.js'
export default {
  name: 'login',
  data: function () {
    return {
      loginForm: {
        username: '',
        password: '',
        validateCode: ''
      }
    }
  },
  methods: {
    login: function () {
      console.log('login')
    }
  },
  components: {
    SheInput,
    SheForm,
    SheFormItem,
    SheButton
  },
  mounted: function () {
    console.log(particlesJS)
    window.particlesJS.load('particles-js', './static/particlesjs-config.json', function () {
      console.log('callback - particles.js config loaded')
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/theme.scss";
.login{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('../../assets/login-bg.jpg') center center;
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
</style>


