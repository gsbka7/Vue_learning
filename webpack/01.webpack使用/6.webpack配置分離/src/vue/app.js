export default {
    template: 
    `
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按鈕</button>
        <h2>{{name}}</h2>
    </div>
    `,
    data() {
        return {
            message: 'hello',
            name: 'aaa'
        }
    },
    methods: {
        btnClick() {

        }
    }
}