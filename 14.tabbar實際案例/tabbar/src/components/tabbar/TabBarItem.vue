<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot  name="item-icon"></slot>
        </div>
        <div v-else>
            <slot  name="item-icon-active"></slot>
        </div>
        <!-- 動態綁定class(增加css樣式) -->
        <!-- <div :class="{active: isActive}"  -->
        <div :style="activeStyle">
            <!-- 插槽內容會被替換，所以用div包覆(只有子層內容被替換) -->
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem' ,
    props: {
        //1.在父組件(App.vue)定義路徑path="/home"
        //2.用props接收path
        //3.this.$router.replace(this.path)
        path: String, //限定String類型，必須大寫
        
        activeColor: {
            type: String,
        }
    },
    data() {
        return {
            // isActive: true //不寫死，用indexOf判斷
            
        }
    },
    computed: {
        //比較path和路由
        isActive() {
            //目前活耀的路由是否包含props傳過來的路由
            //indexof = -1，表示不包含
            // /home ->item1(/home) = true
            // /category ->item1(/category) = false
            // /shoppingcart ->item1(/shoppingcart) = false
            // /profile ->item1(/profile) = false
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            //先請求isActive()是否活躍，再判斷是否修改樣式
            //直接放到行內過於複雜，可改放到 methods 或 computed
            //<div :style="this.isActive ? {color: this.activeColor} : {}">
            return this.isActive ? {color: this.activeColor} : {}
        }
    },
    methods: {
        itemClick() {
            //replace禁止返回 <-> push
            this.$router.replace(this.path)
        }
    }
};
</script>

<style>

.tab-bar-item{
    flex: 1;
    text-align: center;
    /* 一般在開發時使用的高度 */
    height: 49px;
    font-size: 14px;
}

.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin: 3px;
    margin-bottom: 2px;
    vertical-align: middle;
}

/* 改用props動態綁定 */
.active{
    color: red;
}

</style>