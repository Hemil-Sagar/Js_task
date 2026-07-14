// Reverse a string.

const prompt = require('prompt-sync')()

let str = prompt('Input String: ')

const reverseString = str => str.split('').reverse().join('');

console.log(reverseString(str));
