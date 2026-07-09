// Calculate compound interest.

const prompt = require('prompt-sync')();

let principal = Number(prompt("Add your principal: "))
let rate_of_interest = Number(prompt("Add Rate of interest: "))
let number_of_time = Number(prompt("Add Number of time: "))
let time_of_year = Number(prompt("Add Time of year: "))

let amount = principal * Math.pow((1 + rate_of_interest / number_of_time),number_of_time * time_of_year);
let CI = amount - principal

console.log("Compound interest= ", CI)
