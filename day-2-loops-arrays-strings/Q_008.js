// Find Palindrome number.

const prompt = require('prompt-sync')()

let num = Number(prompt('Input number: '))
let original = num
reverse = 0

num = Math.abs(num)

while (num > 0) {
  let digit = num % 10
  reverse = reverse * 10 + digit
  num = Math.floor(num/10)
}

if (reverse === original) {
  console.log(original + " is Palindrome")
} else {
  console.log((original + " is not Palindrome"))
}
