//導入
import Vue from 'vue'
import App from './App'

//從./router/index導入
import router from './router'

Vue.config.productionTip = false

//在Vue原型加上方法 -> 所有組件都會新增此方法
//User.vue中顯示結果
// Vue.prototype.test = function () {
//   console.log('test');
// }
// Vue.prototype.name = 'abc'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router: router,
  router,//導入至各個頁面
  render: h => h(App)
})

// console.log(router);
