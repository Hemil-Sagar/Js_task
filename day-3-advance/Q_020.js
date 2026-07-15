// Object destructuring.

const prompt = require("prompt-sync")();

let student = {
    name: prompt("Input Name: "),
    age: Number(prompt("Input Age: "))
};

const { name, age } = student;

console.log("Name:", name);
console.log("Age:", age);