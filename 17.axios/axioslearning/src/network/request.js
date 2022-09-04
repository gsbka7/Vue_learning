import axios from 'axios'

export function request(config) {

    //1.
    // //1.創建axios實例
    // const instance = axios.create({
    //     baseURL: 'http://123.207.32.32:8000',
    //     timeout: 3000
    // })

    // //3.發送真正的網路請求
    // instance(config)
    //     .then(res => {
    //         success(res)
    //     })
    //     .catch(err => {
    //         failure(err)
    //     })


    //2.
        // //1.創建axios實例
    // const instance = axios.create({
    //     baseURL: 'http://123.207.32.32:8000',
    //     timeout: 3000
    // })

    // //2.發送真正的網路請求
    // instance(config.baseConfig)
    //     .then(res => {
    //         config.success(res)
    //     })
    //     .catch(err => {
    //         config.failure(err)
    //     })


    //3.
    // return new Promise((resolve, reject) => {
    //     const instance = axios.create({
    //     baseURL: 'http://123.207.32.32:8000',
    //     timeout: 3000
    // })
    // instance(config)
    //     .then(res => {
    //         resolve(res)
    //     })
    //     .catch(err => {
    //         reject(err)
    //     })
    // })


    //4.最終方案 + 攔截器

    //1.創建axios實力
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 3000
    })

    //2.攔截器
    //(1)請求攔截
    // instance.interceptors.request.use(config => {
    //     console.log(config);
    //     //1.比如config中的一些資訊不符合服務器的要求

    //     //2.比如每次發送網路請求時，都希望在介面中顯示一個請求的圖示
    //     //(讀取時的圓圈)

    //     //3.某些網路請求(ex:登入(taken))，必須攜帶一些特殊資訊

    //     return config
    // }), err => {
    //     console.log(err);
    // }

    //(2)響應攔截
    instance.interceptors.response.use(res => { //已經響應所以拿到的是result
        // console.log(res);
        return res.data
    }), err => {
        console.log(err);
    }
    //3.發送真正的網路請求
    return instance(config)

}