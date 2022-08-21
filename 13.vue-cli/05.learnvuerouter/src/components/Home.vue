<template>
  <div>
    <h2>首頁_h2</h2>
    <p>首頁_p</p>


    <router-link to='/home/news'>新聞</router-link>
    <router-link to='/home/message'>訊息</router-link>
    <router-view/>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: 'message',
      path: '' //設置變數 -> beforeRouteLeave紀錄離開頁面時的網址
    }
  },
  //生命週期 //創建 ->掛載 -> 活躍 -> 不活躍 -> 刷新 -> 銷毀
  created() { //組件創建時回調
    console.log('created');
    // document.title = '首頁' //頁面多時不容易維護
  },
  // mounted() { //組件掛載時回調
  //   console.log('mounted');
  // },
  // updated() { //組件刷新時回調
  //   console.log('updated');
  // },
  destroyed() { //組件銷毀時回調 //keep-alive時不調用
    console.log('destroyed');
  },
  // activated() { //活躍 //kppe-alive使用時調用
  //   this.$router.push(this.path).catch(err =>{});//解除報錯
  //   console.log('act');
  // },
  // deactivated() { //不活躍 //kppe-alive使用時調用
  //   console.log('de');
  // },
  beforeRouteLeave(to, from, next) {
    //設置path(路徑) -> activated引入path ->離開頁面前將path修改為目前網址
    // console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  }
}
</script>

<style>


</style>