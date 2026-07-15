// Nested object.

const prompt = require("prompt-sync")();

let student = {
    name: prompt("Input Name: "),
    age: Number(prompt("Input Age: ")),
    address: {
        city: prompt("Input City: "),
        state: prompt("Input State: ")
    }
};

console.log("\nStudent Details:");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("City:", student.address.city);
console.log("State:", student.address.state);