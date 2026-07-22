const pipe = (...functions)=> {
  return (value) => {
    return functions.reduce((result, func) => {
      return func(result)
    }, value)
  }
}

const add2 = (num) => num + 2
const multiply3 = (num) => num * 3

const calculate = pipe(add2, multiply3)

console.log(calculate(10))