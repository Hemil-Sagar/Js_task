// Delete properties.

// Add new properties.

const prompt = require("prompt-sync")();

let student = {
    name: prompt("Enter Name: "),
    age: Number(prompt("Enter Age: ")),
    course: prompt('Input student course: '),
    marks: Number(prompt('Input student marks: ')),
};

delete student.marks
console.log(student);