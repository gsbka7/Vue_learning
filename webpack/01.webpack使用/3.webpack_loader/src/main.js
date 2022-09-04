// 1.commonjs的模組化規範
const {add, mul} = require('./js/mathUtil.js');

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.ES6的模組化規範
import {name, age, height} from './js/info.js';

console.log(name);
console.log(age);
console.log(height);

// 3.css
require('./css/normal.css');

// 4.less
require('./css/special.less')
document.writeln('<h2>hello</h2>')

