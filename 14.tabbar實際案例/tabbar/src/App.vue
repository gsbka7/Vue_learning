<template>
  <div id="app">
    <main-tab-bar/>
    <router-view/>
  </div>
</template>

<script>
//1.導入組件 2.在tamplate裡使用組件
import MainTabBar from './components/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
/* @import './assets/css/base.css'; */
@import url('./assets/css/base.css');

</style>
