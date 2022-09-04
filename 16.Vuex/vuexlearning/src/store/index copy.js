//1.引入
import Vue from 'vue'
import Vuex from 'vuex'

import {
    INCREMENT
} from './mutation-types'

//2.使用
Vue.use(Vuex)

//3.創建物件
const modulesA = {
    state: {
        name: 'moduName'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdateName(context) {
            console.log(context); //context.rootGetters可拿到store中getters內容
            setTimeout(() => {
                context.commit('updateName', 'aActions') //提交至modulesA內的mutations
            }, 1000);
        }
    },
    getters: {
        fullname(state) {
            return state.name + 'getters'
        },
        fullname2(state, getters) {
            return getters.fullname + 'getters'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    }
}



const store = new Vuex.Store({
    state: {//資料是響應式的
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
    },
    mutations: {//store狀態更新的唯一方式
        //定義方法 -> App.vue -> methods更新
        //事件類型 + 回調函式(state)
        [INCREMENT](state) { //默認屬性state指向上面的state
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        addCount(state, payload) {
            console.log(payload);
            state.counter += payload.count
        },
        addStu(state, stu) {            
            state.students.push(stu)
        },
        updateInfo(state) {
            state.info.name = 'change'

            //非同步，頁面會被更新，但Vuex裡的紀錄不會
            //不要再mutation裡進行非同步操作
            // setTimeout(() => {
            //     state.info.name = 'change'
            // }, 1000);

            //增加
            //因為沒有事先在state裡定義，非響應式
            // state.info['address'] = 'tw' //增加屬性

            //物件 -> key, 陣列 -> number 
            // Vue.set(state.info, 'address', 'tw')


            //刪除
            // delete state.info.age //無法做到響應式
            // Vue.delete(state.info, 'age')

        }
    },
    actions: {
        aUpdateInfo(context, payload) { //默認屬性context(上下文), payload傳遞參數
            // setTimeout(() => {//修改state一定是通過mutation
            //     context.commit('updateInfo')
            //     console.log(payload.message)
            //     payload.success()
            // }, 2000);


            return new Promise((resolve, reject) => {
                setTimeout(() => {//修改state一定是通過mutation
                    context.commit('updateInfo')
                    console.log(payload)

                    resolve('resolve') //->this.$store.dispatch('aUpdateInfo', '訊息').then()
                }, 2000);
            })
        }

    },
    getters: {
        powerCounter(state) {//默認屬性為state
            return state.counter *state.counter
        },
        stu20(state) {
            return state.students.filter(s => s.age > 20)
        },
        stu20Length(state, getters) {//getters參數可用其他getters中的內容
            return getters.stu20.length
        },
        ageStu(state) {
            // return function (age) {
            //     return state.students.filter(s => s.age > age)
            // }
            return age => {
                return state.students.filter(s => s.age > age)
            }
        },

    },
    modules: {
        a: modulesA
    }
})

//4.導出store
export default store