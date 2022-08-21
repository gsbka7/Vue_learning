// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'//組件，可被導入

Vue.config.productionTip = false

/* eslint-disable no-new */

const cpn = {
  template: '<div>{{message}}</div>',
  data() {
    return {
      message : '組件message'
    }
  }
}

new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement) {
    //1.普通用法
    //createElement('標籤', {屬性}, ['內容'])
    //會掛載到index.html -><h2></h2>
    // return createElement('h2',
    // {class: 'box'},
    // ['Hello World', createElement('button', ['按鈕'])])
    
    //2.傳入組件物件
    return createElement(App)
  }
})

//runtimecompiler
//template -> ast(抽象語法樹) -> render -> vdom -> UI
//template -> 解析 -> 編譯 ->渲染 -> 渲染

//runtimeonly(1.效能更高 2.代碼更少(少6kb))
//render -> vdom -> UI
