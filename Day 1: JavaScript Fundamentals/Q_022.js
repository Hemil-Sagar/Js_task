// Check voting eligibility.

const prompt = require('prompt-sync')()

let age = Number(prompt("What is your age: "))

if (age > 18) {
  console.log("You are eligibiable for votiong")
} else {
  console.log("You are not eligibiable for votiong")
}