// Check whether a character is a vowel.
const prompt = require('prompt-sync')()

let char = prompt('Input a character: ')

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
  console.log("Character is a vowel")
} else {
  console.log("Character is not a vowel")
}