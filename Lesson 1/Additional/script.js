'use strict'

//Варинат 1

let num = 33721,
    arr = ('' + num).split('');

console.log(arr.map(Number));
console.log(typeof (arr))

//Варинат 2
let num = 33721,
    arr = Object.assign([], '' + num);
console.log(arr.map(Number));

//Варинат 3
let num = 33721,
    arr = [].map.call('' + num, l => l);
console.log(arr.map(Number));