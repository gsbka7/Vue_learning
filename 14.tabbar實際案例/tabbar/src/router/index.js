//1.導入
import Vue from 'vue'
import VueRouter from 'vue-router'

// const Home = function () {
//   import ('../views/home/Home')
// }

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Shoppingcart = () => import('../views/shoppingcart/Shoppingcart')
const Profile = () => import('../views/profile/Profile')

//2.安裝插件
Vue.use(VueRouter)

//3.建立路由對象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shoppingcart',
    component: Shoppingcart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history' //hash -> histroy(將#去除)
})

//3.導出
export default router // -> main.js導入