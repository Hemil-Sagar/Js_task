// Spread operator.

const prompt = require("prompt-sync")();

const person = {
    name: prompt("Enter your name: "),
    age: Number(prompt("Enter your age: "))
};

const copy = { ...person };

console.log(copy);