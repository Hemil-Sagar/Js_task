// Remove duplicate characters.

const prompt = require('prompt-sync')()

let str = prompt("Enter a string: ");

let result = "";

for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
        result += str[i];
    }
}

console.log("String after removing duplicates:", result);