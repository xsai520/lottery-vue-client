<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  *,html,body{
    width: 100%;
    height: 100%;
    padding:0;
    margin:0;
  }
  html,body{
    background: #F2F2F2;
    overflow-x: hidden;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
