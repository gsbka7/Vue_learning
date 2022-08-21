<template>
  <div>
    <h2>戶用介面</h2>
    <p>用戶相關信息</p>
    <h2>{{userid}} userid</h2>
    <h2>{{$route.params.id}} $route.params.userid</h2>
    <button @click="btnClick">按鈕</button>
  </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userid() {
            //$route為index new VueRouter下的routes裡的內容
            return this.$route.params.id //id為index裡的path: '/user/:id'
        }
    },
    methods: {
        btnClick() {
            //所有的組件都繼承Vue纇的原型
            console.log(this.$router)
            console.log(this.$route);//App.vue的methods裡的內容

            //mina.js中新增方法，所以可以使用
            this.test()
            console.log(this.name);
        }
    },
    created() {
        console.log("User created");
    },
    destroyed() {
        console.log('User destroyed');
    }

}
</script>

<style>

</style>