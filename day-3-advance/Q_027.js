// Optional chaining.

const prompt = require('prompt-sync')()

const detail = {
  name: prompt('Input your name: '),
  age: {
    age: prompt('Input your age: ')
  }
}

console.log(detail?.name)
console.log(detail?.age)
console.log(detail?.address)

