<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按鈕</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'

export default {
    name: "app",
    conponents: {
        Cpn
    },
    data() {
        return {
            message: "hello",
            name: "aaa"
        };
    },
    methods: {
        btnClick() {
        }
    },
    components: { Cpn }
}
</script>


<style>
.title {
    color: black
}

</style>