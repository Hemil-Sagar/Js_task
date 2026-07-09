// Find the perimeter of a rectangle.

const prompt = require('prompt-sync')()

let length = Number(prompt("Input length of rectangle: "))
let width = Number(prompt("Input width of rectangle: "))

let p = 2 * (length + width)

console.log("Perimeter = ",p)