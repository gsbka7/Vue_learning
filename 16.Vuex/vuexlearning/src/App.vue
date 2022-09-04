<template>
  <div id="app">
    <h2>----------App內容：modules中的內容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateNmae">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">非同步修改名字</button>


    <h2>----------App內容----------</h2>
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(32)">+32</button>
    <button @click="addStu">添加學生</button>

    <h2>----------App內容：getter----------</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.stu20 }}</h2>
    <h2>{{ $store.getters.stu20.length }}</h2>
    <h2>{{ $store.getters.ageStu(22) }}</h2>

    <h2>----------App內容：info物件的內容是否為響應式----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改資訊</button>

    <h2>----------HelloVue內容----------</h2>
    <hello-vue />
  </div>
</template>

<script>
import HelloVue from "./components/HelloVue.vue";
import {
  INCREMENT
} from './store/mutation-types'

export default {
  name: "App",
  components: {
    HelloVue,
  },
  data() {
    return {
      message: "App組件",
      counter: 0,
    };
  },
  // computed: {
  //   stu20() {
  //     return this.$store.state.students.filter(s => s.age > 20); //過濾掉20歲以下的
  //   },
  // },
  methods: {
    add() {
      this.$store.commit(INCREMENT);
    },
    sub() {
      this.$store.commit("decrement");
    },
    addCount(count) {//傳遞參數至index.js -> mutations
      //參數被稱為mutations的payload(負載)

      //兩種提交方式傳遞的資料不同

      //1.普通的提交方式
      // this.$store.commit('addCount', count);

      //2.特殊的提交方式
      this.$store.commit({
        type: 'addCount', //對應事件類型
        // count: count //此方法傳遞的是物件(payload) //{"type": "addCount","count": 32}
        count, //加強語法
      })
    },
    addStu() {//參數不只一個，可以使用物件，在從物件中取出資料
      const stu = {id: 99, name: 'name99', age: 99}
      this.$store.commit('addStu', stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')//因actions提交過
      // this.$store.dispatch('aUpdateInfo')//提交至actions，再通過mutation修改state狀態
    

      //   this.$store.dispatch('aUpdateInfo', {//傳參數
      //   message: 'message',
      //   success: () => {
      //     console.log('success');
      //   }
      // })

      //將參數提交至actions, actions返回promise, 這裡返回結果(then, catch)
      this.$store
      .dispatch('aUpdateInfo', '訊息')
      .then(res => {
        console.log('完成提交');
        console.log(res);
      })
    },
    updateNmae() {//在modules模塊中也是使用commit() //優先在store的mutations查找
      this.$store.commit('updateName', 'changeNmae')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
};
</script>

<style>
</style>
