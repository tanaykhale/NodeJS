// let cal = require('./functionality');
// console.log(cal.isPrime([2, 3, 4, 5, 6]))
// console.log(cal.longestString(['welcome', 'to', 'node']))
// console.log(cal.getDate())
let arr = [1, 2, 3, 4]
// arr.reduce((acc, cur) => {
//     console.log('acc' + acc);
//     console.log('cur' + cur);
//     return acc + cur;

// }, 10)
// let obj = { a: 3 }
// let a = arr.map((cur, idx, arr) => { console.log(this.a); return cur * this.a }, obj);
// console.log(a.toString());
const multiplier = {
    factor: 2,
};

const numbers = [1, 2, 3, 4];
const result = numbers.map(function (value) {
    console.log(typeof this)
    return value * this.factor;
}, 7);

console.log(result);