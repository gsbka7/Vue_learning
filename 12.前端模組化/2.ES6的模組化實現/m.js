//導入{}中定義的變數
import { flag, sum } from "./a.js";

if(flag) {
    console.log('mmmmmmmmm')
    console.log(sum(50, 30));

}

//直接導入
import { num1, height } from "./a.js";
console.log(num1, height)

//導入function
import { mul, Person } from "./a.js";
console.log(mul(10, 11));

const p = new Person();
p.run();

//default，不需加{}，可隨意命名，只能使用一個
// import addr from "./a.js";
// console.log(addr);

import arg from "./a.js";
console.log(arg);


//統一全部導入
import * as aaa from './a.js';
console.log(aaa.flag);
console.log(aaa.height);



