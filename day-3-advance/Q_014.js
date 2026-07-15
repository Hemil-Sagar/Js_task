// Loop through object.

const prompt = require('prompt-sync')()

let car = {
  name: prompt('Input car brand name: '),
  model: prompt('Input car model: '),
  price: prompt('Input car price: '),
}

console.log("Car details: ")

for (let key in car) {
  console.log(key+":", car[key])
}