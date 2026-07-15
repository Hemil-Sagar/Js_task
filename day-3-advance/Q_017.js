// Clone object.

const prompt = require('prompt-sync')()

const person1 = {
    name: prompt("Input name: "),
    address: {
        city: prompt("Input city: ")
    }
};

const person2 = { ...person1 };

person2.address.city = "Surat";

console.log('person details: ', person1);