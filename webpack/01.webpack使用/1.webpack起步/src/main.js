//commonjs的模組化規範
const {add, mul} = require('./mathUtil.js');

console.log(add(20, 30));
console.log(mul(20, 30));

//ES6的模組化規範
import {name, age, height} from './info';

console.log(name);
console.log(age);
console.log(height);