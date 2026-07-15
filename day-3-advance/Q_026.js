// Destructuring.

const prompt = require('prompt-sync')()

let student = {
  name: prompt('Input name: '),
  age: prompt('Input age: ')
}

const { name, age } = student

console.log('Name: ', name)
console.log('Age: ', age)