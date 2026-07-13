// Print hollow rectangle.

const prompt = require("prompt-sync")();

let rows = Number(prompt("Input number of rows: "));
let cols = Number(prompt("Input number of columns: "));

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= cols; j++) {

        if (i == 1 || i == rows || j == 1 || j == cols) {
            pattern += "*";
        } else {
            pattern += " ";
        }

    }

    console.log(pattern);
}