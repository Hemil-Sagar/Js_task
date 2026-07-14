// Count words.

const prompt = require('prompt-sync')()

let str = prompt('Input string: ')

const count = str.trim().split(/\s+/)

console.log('Number of words: ', count.length)