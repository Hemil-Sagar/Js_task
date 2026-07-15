// Add new properties.

const prompt = require("prompt-sync")();

let student = {
    name: prompt("Enter Name: "),
    age: Number(prompt("Enter Age: "))
};

student.course = "B.Tech";
student.marks = 90;

console.log(student);