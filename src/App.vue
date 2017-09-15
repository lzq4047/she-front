<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "../node_modules/minireset.css/minireset.css";
  @import "./sass/theme.scss";
  @import "./sass/utils.scss";
  html, body{
    height: 100%;
  }
  #app {
    height: 100%;

    font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    font-size: 14px;
    color: $color-font;
  }
</style>

