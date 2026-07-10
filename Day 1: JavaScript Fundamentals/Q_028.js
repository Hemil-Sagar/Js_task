// Check triangle type.

const prompt = require('prompt-sync')()

let a = Number(prompt("Input first side: "))
let b = Number(prompt("Input Second side: "))
let c = Number(prompt("Input third side: "))

if (a + b <= c || a + c <= b || b + c <= a) {
    console.log("Invalid Triangle");
} else if (a === b && b === c) {
    console.log("Equilateral Triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
} else {
    console.log("Scalene Triangle");
}