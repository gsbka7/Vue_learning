<template>
    <tab-bar>
    <!-- :path="動態變數"　path="靜態(字串)"-->
        <tab-bar-item path="/home" activeColor="dodgerblue">
            <!-- 不是從import讀取的話要加 ~(波浪符) -->
            <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home-active.svg" alt="">
            <div slot="item-text">首頁</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="dodgerblue">
            <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/category-active.svg" alt="">
            <div slot="item-text">分類</div>
        </tab-bar-item>
        <tab-bar-item path="/shoppingcart" activeColor="dodgerblue">
            <img slot="item-icon" src="~assets/img/tabbar/shopping-cart.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/shopping-cart-active.svg" alt="">
            <div slot="item-text">購物車</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="dodgerblue">
            <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.svg" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar'
import TabBarItem from '@/components/tabbar/TabBarItem.vue'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>