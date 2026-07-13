// Prnumnt all prnummes between 1 and N.

const prompt = require('prompt-sync')()

let n = Number(prompt('Input Number: '))

for (let num = 2; num <= n; num++){
  let prime = true
  for (let i = 2; i < num; i++){
    if (num % i === 0) {
      prime = false
      break
    }
  }
  if (prime) {
    console.log(num)
  }
}

