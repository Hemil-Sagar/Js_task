// Default parameters.

const prompt = require("prompt-sync")();

let userName = prompt("Input your name: ");

function welcome(name = "Guest") {
    console.log("Hello, " + name);
}

welcome(userName || undefined);