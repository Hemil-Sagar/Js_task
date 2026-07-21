const prompt = require("prompt-sync")() 

const myFilter = (array, callback) => {

    const result = [] 

  for (let i = 0; i < array.length; i++) {

        if (callback(array[i])) {
            result.push(array[i]) 
        }

    }

    return result 

} 

const input = prompt("Enter numbers separated by commas: ") 

const numbers = input.split(",").map(Number) 

const evenNumbers = myFilter(numbers, (num) => {
    return num % 2 === 0 
}) 

console.log(evenNumbers) 