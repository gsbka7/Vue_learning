import Vue from 'vue'
import App from './App'

// import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   methods: 'get'
// }).then(res=>{
//   console.log(res);
// })


// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   //專門針對get的參數拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res=>{
//   console.log(res);
// })


//axios.all
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// })], [axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })])
//   .then(results => {
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
//   })


//spread
// axios.all([axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// })], [axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1, res2);
//   }))



// axios.all([axios({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,
//   url: 'home/multidata'
// })], [axios({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000,
//   url: 'home/multidata',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1, res2);
//   }))


//全域配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: 'home/multidata'
// })], [axios({
//   url: 'home/multidata',
//   params: {
//     type: 'sell',
//     page: 4
//   }
// })])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1, res2);
//   }))


//axios實例

// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 3000
// })

// instance1({
//   url: 'home/multidata'
// }).then(res=>{
//   console.log(res);
// })

// instance1({
//   url: 'home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res=>{
//   console.log(res);
// })





import {request} from '@/network/request.js'
//1.
// request({
//   url: 'home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

//2.
// request({
//   baseConfig: {

//   },
//   success: function (res){

//   },
//   failure: function (err) {

//   }
// })

//3.
request({
  url: 'home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err); 
})


