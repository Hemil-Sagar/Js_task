// Find the grade from marks.

const prompt = require("prompt-sync")();

let marks = Number(prompt("Enter your marks: "));

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A");
} else if (marks >= 80) {
    console.log("Grade: B");
} else if (marks >= 70) {
    console.log("Grade: C");
} else if (marks >= 60) {
    console.log("Grade: D");
} else if (marks >= 35) {
    console.log("Grade: E");
} else if (marks >= 0) {
    console.log("Grade: F (Fail)");
} else {
    console.log("Invalid Marks");
}