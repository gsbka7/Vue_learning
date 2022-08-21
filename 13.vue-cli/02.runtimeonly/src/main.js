import Vue from 'vue'
import App from './App'

//傳入的是object，裡面有render函式，沒有template(已經被解析為render)
//由ver-template-compiler解析
console.log(App);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
  // render: function h() {
  //   return h(App)
  // }
})

//runtimecompiler
//template -> ast(抽象語法樹) -> render -> vdom -> UI
//template -> 解析 -> 編譯 ->渲染 -> 渲染

//runtimeonly(1.效能更高 2.代碼更少(少6kb))
//render -> vdom -> UI