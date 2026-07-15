// Count properties.

const prompt = require('prompt-sync')()

let employee = {
    id: Number(prompt("Input Employee ID: ")),
    name: prompt("Input Employee Name: "),
    department: prompt("Input Department: "),
    salary: Number(prompt("Input Salary: "))
};

let count = 0

for (let key in employee) {
  count++
}

console.log("Employee Details:");
console.log(employee);

console.log("Total Properties:", count);