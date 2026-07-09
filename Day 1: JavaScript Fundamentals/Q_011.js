// Calculate simple interest.

const prompt = require('prompt-sync')();


let principal = Number(prompt("Add your principal: "));
let rate = Number(prompt("Add your rate: "));
let time = Number(prompt("Add your time: "));

let SI = (principal * rate * time) / 100;
console.log("Simple interest", SI)