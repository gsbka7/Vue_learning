

export default {
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
}