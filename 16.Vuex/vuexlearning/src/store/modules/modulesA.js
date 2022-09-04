export default {
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