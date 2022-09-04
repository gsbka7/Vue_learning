export default {
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
    }