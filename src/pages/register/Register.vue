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
            <p>
              <label for="userDeal">
                <input type="checkbox" name="userDeal" id="userDeal">
                <span>接收用户使用协议</span>
              </label>
            </p>
          </she-form-item>
          <she-form-item>
            <p class="justify-end">
              <she-button type="primary" text>
                <router-link :to="{name: 'login'}" tag="span">已有账户？前去登录</router-link>
              </she-button>
              <she-button type="primary">创建账户</she-button>
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
      }
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
  margin-bottom: 70px;
}
.footer-logo{
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
