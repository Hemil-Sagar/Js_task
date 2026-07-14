// Check palindrome.

const prompt = require('prompt-sync')()

let str = prompt("Input string: ")

let palindrome = true

for (let i = 0; i < Math.floor(str.length / 2); i++){
  if (str[i] !== str[str.length - 1 - i]) {
    palindrome = false
    break
  }
}

if (palindrome) {
  console.log('String is palindrome')
} else {
  console.log('String is not palindrome')
}