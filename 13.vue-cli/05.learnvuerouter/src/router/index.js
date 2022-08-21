//導入路由對象，調用Vue.use(VueRouter)
//創建路由實例，傳入路由映射配置
//在Vue實例中掛載創建的路由實例


//配置路由相關信息
import VueRouter from "vue-router";
import Vue from 'vue';//導入vue -> 1

//導入路由(創建好的頁面)
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

//懶加載(將各個頁面獨立成一個.js)
//1.結合Vue和webpack
// const Home = recsolve => { require.ensure(['../components/Home.vue], () => { resolve(require('../components/Home.vue')) })}

//2.AMD寫法
// const About = resoleve => reqyire(['../components/About.vue'], resolve)
//2.建立VueRouter物件

//3.ES6寫法
// const Home => () = import('../components/Home.vue')



//1.通過Vue.use(插件), 安裝插件
Vue.use(VueRouter)

//2.建立物件
const routes = [
  {
    //默認路由
    path: '',
    redirect: '/home'
  },
  {
    path: '/home', //必須與頁面中的路徑相同
    component: Home,
    meta: {
      title: '首頁'
    },
    // component: () => import('../components/Home.vue')
    children: [
      {
        path: '/',
        redirect: 'news'
      },
      {//陣列
        path: 'news', //不加 '/'
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '關於'
    },
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter');
      next()
    }
    ,
  },
  {
    //決定動態 -> App.vue設置:to="'/user/'+id"
    //名字可自己定義
    path: '/user/:id',
    component: User,
    meta: {
      title: '用戶'
    }
    //params參數傳遞
    //決定:id -> App.vue 路徑變數需和data中的變數相同 -> User.vue將值動態導出
  },
  {
    path: '/profile',
    component: Profile,
    meta: {//元資料，描述資料的資料
      title: '檔案'
    }
  }
]

const router = new VueRouter({
  //設置路由和組件之間的映射關係
  routes, //ES6增強語法
  mode: 'history',//將hash模式改為history模式
  linkActiveClass: 'active',//修改實例中的class名
})


//前置鉤子(hook)，路由跳轉之前進行回調
// router.beforeEach(function (to, from, next) {
router.beforeEach((to, from, next) => {
  //從from跳轉到to
  document.title = to.meta.title//頁面中的連結標題會顯示'undefine'
  document.title = to.matched[0].meta.title

  //meta裡沒有title，而在matched[0].meta裡有title
  // console.log(to);


  next()
})

//後置鉤子，路由跳轉後回調
router.afterEach((to, from) => {
  
})

//3.route物件傳入Vue實例中
export default router //導出至main.js



//vue-router使用方法
//1.建立路由組件
//2.配置路由
//3.使用路由：透過 router-link router-view