// Function returning object.

const prompt = require('prompt-sync')()

const name = prompt("Input name: ")
let age = Number(prompt("Inpur age: "))

function createPerson(name, age) {
  let person = {
    name: name,
    age: age,
  }
  return person
}

let user = createPerson(name, age)

console.log(user)