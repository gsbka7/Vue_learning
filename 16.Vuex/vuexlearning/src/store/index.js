//1.引入
import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import modulesA from './modules/modulesA'

//2.使用
Vue.use(Vuex)

//3.創建物件
const state = {//資料是響應式的
        counter: 1000,
        students: [
            {id: 1, name: 'name1', age: 18},
            {id: 2, name: 'name2', age: 20},
            {id: 3, name: 'name3', age: 22},
            {id: 4, name: 'name4', age: 24},
        ],
        info: {//一開始被定義到state裡，屬性都會被加入響應式式統中，
                //而響應式系統會監聽屬性的變化，當屬性發生變化，會通知介面中使用到該屬性的地方，讓介面發生刷新
            name: 'info',
            age: 'age',
            height: 'height'
        }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: modulesA
    }
})

//4.導出store
export default store