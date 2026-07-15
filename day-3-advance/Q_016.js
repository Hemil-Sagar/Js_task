// Merge two objects.

const prompt = require('prompt-sync')()

let student = {
    name: prompt("Enter Name: "),
    age: Number(prompt("Enter Age: ")),
};

let course = {
  course: prompt('Input student course: '),
  marks: Number(prompt('Input student marks: ')),
}

let merge = { ...student, ...course }
// console.log(student)
console.log(merge)