import { INCREMENT } from './mutation-types'

export default {
        //store狀態更新的唯一方式
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
    }