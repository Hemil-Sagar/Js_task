// Find the area of a circle.

const prompt = require('prompt-sync')();

let r = Number(prompt("Input the Radius: "))
let area = Math.PI * r * r

console.log("Area of cricle: ", area)