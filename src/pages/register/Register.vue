<template>
  <div class="register">
    <div class="register-box">
      <div class="register-box-body">
        <she-form>
          <she-form-item>
            <she-input v-model="registerForm.username" placeholder="USERNAME">
              <span class="iconfont icon-username" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <she-input v-model="registerForm.password" placeholder="PASSWORD" type="password">
              <span class="iconfont icon-password" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <she-input v-model="registerForm.repeatPassword" placeholder="REPEAT PASSWORD" type="password">
              <span class="iconfont icon-password" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <she-input v-model="registerForm.email" placeholder="EMAIL">
              <span class="iconfont icon-email" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <she-input v-model="registerForm.qqNum" placeholder="QQ">
              <span class="iconfont icon-qq" slot="prepend"></span>
            </she-input>
          </she-form-item>
          <she-form-item>
            <div class="justify-between">
              <she-input class="validate-field__input" v-model="validateCode" placeholder="验证码">
                <span class="iconfont icon-validate-code" slot="prepend"></span>
              </she-input>
              <img ref="validateFieldImg" src="/api/user/varifycode" alt="点击切换验证码" @click="changeCode">
            </div>
          </she-form-item>
          <she-form-item>
            <she-checkbox v-model="acceptDeal">接收用户使用协议</she-checkbox>
          </she-form-item>
          <she-form-item>
            <p class="justify-end">
              <she-button type="primary" text>
                <router-link :to="{name: 'login'}" tag="span">已有账户？前去登录</router-link>
              </she-button>
              <she-button type="primary" @click="register">创建账户</she-button>
            </p>
          </she-form-item>
        </she-form>
      </div>
    </div>
    <div class="footer-logo">
      <img src="../../assets/logo-she-white-shadow.png" width="60px" alt="">
    </div>
  </div>
</template>

<script>
import SHA256 from 'crypto-js/sha256'
export default {
  data: function () {
    return {
      registerForm: {
        username: '',
        password: '',
        repeatPassword: '',
        email: '',
        qqNum: '',
        school: ''
      },
      acceptDeal: false
    }
  },
  methods: {
    register: function () {
      this.$http.post('/api/user/register', Object.assign({}, this.registerForm, {
        password: SHA256(this.registerForm.password).toString()
      })).then(res => {
        if (res.data.code === '200') {
          console.log(res.data.msg)
          this.$router.push({name: 'index'})
        }
      }).catch(err => {
        console.error(err)
      })
    },
    changeCode: function () {
      this.$refs.validateFieldImg.setAttribute('src', `/api/user/varifycode?${(new Date().getTime())}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/theme.scss";
.register{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url("./register-background.png") repeat;
}
.register-box{
  width: 360px;
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
.footer-logo{
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
