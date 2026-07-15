// Create a Student object.

const prompt = require('prompt-sync')()

let student = {
  name: prompt('Input student name: '),
  age: Number(prompt('Input student age: ')),
  course: prompt('Input student course: '),
  marks: Number(prompt('Input student marks: ')),
}

console.log(`Student Details:
Name: ${student.name}
Age: ${student.age}
Course: ${student.course}
Marks: ${student.marks}`);
