// Print diamond.

const prompt = require("prompt-sync")();

let rows = Number(prompt("Input number of rows: "));

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}

// Lower Pyramid
for (let i = rows - 1; i >= 1; i--) {
    let pattern = "";

    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }

    // Print stars
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }

    console.log(pattern);
}