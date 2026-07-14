// Remove spaces.

const prompt = require('prompt-sync')()

let str = prompt('Input string: ')

let result = str.replace(" ", "")
console.log(result)