// Callback function.

const prompt = require('prompt-sync')()

let num = Number(prompt("Input number: "))

function even(num) {
  console.log(num + ' is a even number')
}

function odd(num) {
  console.log(num + ' is a odd number')
}

function check(num, evencallback, oddcallback) {
  if (num % 2 === 0) {
    evencallback(num)
  } else {
    oddcallback(num)
  }
}

check(num, even, odd)