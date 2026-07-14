// Find longest word.

// Find longest word.

const prompt = require("prompt-sync")();

let str = prompt("Input string: ");

let words = str.split(" ");

let longest = words[0];

for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log("Longest word:", longest);
console.log("Length:", longest.length);