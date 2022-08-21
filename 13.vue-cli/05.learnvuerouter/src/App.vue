<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- router-link會變渲染成<a>標籤 -->
    <!-- 使用tag=""轉換 -->
    <!-- 使用replace(禁止返回)把 history.pushState 轉換成 history.replaceState -->
    <!-- <router-link to='/home' tag="button" replace active-class="active">首頁</router-link>
    <router-link to='/about' tag="button" replace>關於</router-link> -->

    <!-- <router-link to='/home' tag="button" replace="">首頁</router-link>
    <router-link to='/about' tag="button" replace>關於</router-link> -->

    <!-- <button @click="homeClick">首頁</button>
    <button @click="aboutClick">關於</button> -->

    <router-link to='/home'>首頁</router-link>
    <router-link to='/about'>關於</router-link>

    <!-- data(){}取得內容 -->
    <!-- <router-link v-bind:to="'/user/'+user">用戶</router-link> -->
    <!-- <router-link :to="'/user/'+userid">用戶</router-link> -->

    <!-- <router-link to='/profile'>檔案</router-link> -->
    <!-- query參數傳遞 -->
    <!-- <router-link v-bind:to="{path:'/profile', query:{name: 'HSIEH', age: 30}}">檔案</router-link> -->

    <!-- 用button傳遞 -->
    <button @click="userClick">用戶</button>
    <button @click="profileClick">檔案</button>


    <!-- <router-view></router-view> -->
    <!-- 包在keep-alive裡的組件都會被存取 -->
    <!-- exclude：讓目標會被銷毀且重新創建，逗號(,)後不可加空格 -->
    <!-- include：相反，任何組件都會被存取 -->
    <keep-alive exclude="Profile,User"> 
      <router-view/>
    </keep-alive>
        
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid: 'user01'//到user.vue動態取出
    }
  },
  methods: {
    homeClick() {
      //透過代碼的方式修改路由 vue-router
      //this指向index裡的const router = new VueRouter
      
      // this.$router.push('/home'); //history.pushState
      this.$router.replace('/home'); //history.replaceState
      console.log('homeClick');
    },
    aboutClick() {
      // this.$router.push('/about');
      this.$router.replace('/about')
      console.log('aboutClick');
    },
    userClick() {
      this.$router.push('/user/' + this.userid)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'HSIEH',
          age: 30
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* 修改class */
/* (1) */
/* .router-link-active{
  color: #f00
} */

/* (2) */
.active{
  color: #f00
}

/* (3) */
/* 在index.js增加linkActiveClass: 'active' */
</style>
