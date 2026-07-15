// Compare objects.

// Compare two objects.

const prompt = require("prompt-sync")();

let obj1 = {
    name: prompt("Input Name for Object 1: "),
    age: Number(prompt("Input Age for Object 1: "))
};

let obj2 = {
    name: prompt("\nInput Name for Object 2: "),
    age: Number(prompt("Input Age for Object 2: "))
};

let isEqual = JSON.stringify(obj1) === JSON.stringify(obj2);

console.log("\nObjects are equal:", isEqual);