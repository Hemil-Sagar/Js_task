// Palindrome checker function.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input number: '))

function palindrome(num) {
  let original = num
  reverse = 0
  
  num = Math.abs(num)
  
  while (num > 0) {
    let digit = num % 10
    reverse = reverse * 10 + digit
    num = Math.floor(num/10)
  }
  return reverse === Math.abs(original)
}

if (palindrome(num)) {
  console.log(num + " is Palindrome")
} else {
  console.log(num + " is not Palindrome")
}
