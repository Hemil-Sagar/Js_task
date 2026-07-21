const prompt = require('prompt-sync')()

const myReduce = (array, callback, initialValue) => {
  let accumulator = initialValue

  for (let i = 0; i < array.length; i++){
    accumulator = callback(
      accumulator,
      array[i]
    )
  }
  return accumulator
}

const input = prompt("Input number seperated by commas: ")

const numbers = input.split(",").map(Number)

const total = myReduce(numbers, (sum, number) => {
  return sum + number
}, 0)

console.log("Sum = ", total)