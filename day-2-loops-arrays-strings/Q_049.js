// Convert to title case.

const prompt = require('prompt-sync')()

let str = prompt('Input string: ')

let words = str.toLowerCase().split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
}

let result = words.join(" ");

console.log("Title Case:", result);