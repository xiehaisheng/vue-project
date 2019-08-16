<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './views/Header'
// import Home from './views/Home'
// import Nav from './views/Nav'

export default {
  components: {
    Header,
    // Home,
    // Nav,
  }
}
</script>


<style lang="stylus">
#app
  display flex
  height 100%
  flex-direction column
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

</style>
