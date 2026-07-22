const compose = (...functions) => {
  return (value) => {
    return functions.reduceRight((result, func) => {
      return func(result)
    }, value)
  }
}

const add2 = (num) => {
  return num + 2
}

const multiply3 = (num) => {
  return num * 3
}

const composedFunction = compose(
  multiply3,
  add2
)

console.log(composedFunction(5))