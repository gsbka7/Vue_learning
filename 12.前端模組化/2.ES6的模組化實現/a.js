let name = 'main';
let age = 18;
let flag = true;

function sum(sum1, sum2) {
    return sum1 + sum2;
};

if(flag) {
    console.log(sum(20, 30));

};

//1.導出方式一：
export {
    flag, sum
}

//2.導出方式二：
export var num1 = 1000;
export var height = 1.88;

//3.導出函式 / 類：
export function mul(num1, num2) {
    return num1 * num2
}

export class Person {
    run() {
        console.log('run')
    }
}

//4.export default
// const address = 'addre';
// export {
//     address
// };

// export const address = 'addre'

// const address = 'address';
// export default address;

export default function(arg) {
    console.log(arg)
}





