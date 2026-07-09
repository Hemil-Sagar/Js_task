// Convert a string to a number.

const prompt = require('prompt-sync')();

let str = prompt("Give a string value: ")
let num = Number(str)

console.log(typeof str)
console.log(num)
console.log(typeof num)