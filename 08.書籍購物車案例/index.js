const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '第一本',
                date: '2011-1',
                price: 10.00,
                count: 1,
            },
            {
                id: 1,
                name: '第二本',
                date: '2022-2',
                price: 20.00,
                count: 2,
            },
            {
                id: 1,
                name: '第三本',
                date: '2033-3',
                price: 30.00,
                count: 3,
            },
            {
                id: 1,
                name: '第四本',
                date: '20244-4',
                price: 40.00,
                count: 4,
            }
        ]
    },
    methods: {
        getFinalPrice(price) {
            return '$' + price.toFixed(2)
        },
        sub(index) {
            this.books[index].count--
        },
        add(index) {
            this.books[index].count++
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            //1.普通的for循環
            // let totalPirce = 0;
            // for(let i = 0; i < this.books.length; i++) {
            //     totalPirce += this.books[i].price * this.books[i].count;
            // }
            // return totalPirce;

            //2.for(let i in this.books)
            // let totalPirce = 0;
            // for(let i in this.books) [
            //     totalPirce += this.books[i].price * this.books[i].count
            // ]
            // return totalPirce;

            // 3.for(let i of this.books)
            // let totalPirce = 0
            // for(let item of this.books) {
            //     totalPirce += item.price * item.count
            // }
            // return totalPirce;

            // 4.reduce


            //範式：命令式 / 宣告式
            //範式：面向物件 / 函數式
            //filter / map / reduce

            //filter中的回調函式有一個要求：必須返回一個boolean值
            //true：當返回true時，函數內部會自動將這次回調的n加入到新的陣列中
            //false：當返回false時，函數內部會過濾掉這次n
            //1.取出小於100的數字
            const nums = [1, 39, 400, 126, 999 ,52 ,1 ,873]

            // let total = nums.filter(n => n < 100).map(n => n *2).reduce((pre, n) => pre + n)
            // console.log(total)


            // let total = nums.filter(function (n) {
            //     return n < 100
            // }).map(function (n) {
            //     return n * 2
            // }).reduce(function (preValue, n) {
            //     return preValue + n
            // }, 0)
            // console.log(total)


            // //1.filter函式
            // // let newNums = []
            // let newNums = nums.filter(function (n) {
            //     return n <= 100
            // })
            // console.log(newNums)

            // //2.map函式
            // let new2Nums = newNums.map(function (n) {
            //     return n * 2
            // })
            // console.log(new2Nums)

            // //3.reduce函式
            // //對陣列中所有的內容進行彙總
            // let total = new2Nums.reduce(function (preValue, n) {
            //     return preValue + n
            // }, 0)
            // console.log(total)

            //第一次：preValue 0 n 2
            //第二次：preValue 2 n 78
            //第三次：preValue 80 n 104
            //第四次：preValue 184 n 2



            //1.取出小於100的數字
            // const nums = [1, 39, 400, 126, 999 ,52 ,1 ,873]
            // let newNums = []
            // for(let n of nums) {
            //     if(n < 100)
            //     newNums.push(n)
            // }
            // //2.將小於100的數字進行轉化：全部*2
            // let new2Nmus = []
            // for(let n of newNums) {
            //     new2Nmus.push(n * 2)
            // }
            // //3.將所有new2Nums的數字相加
            // let total = 0
            // for(let n of new2Nmus) {
            //     total += n
            // }

            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count

            }, 0)
        }
    }
    // filters: {
    //     showPrice(price) {
    //         return '$' + price.toFixed(2)
    //     }
    // }





})