const once = (callback) => {
  let called = false
  return (...args)=> {
    if (called) {
      console.log("Function already called")
      return
    }
    called = true
    return callback(...args)
  }
}

const greet = (name) => {
  console.log(`Hello ${name}`)
}

const greetOnce = once(greet)

greetOnce("Saumil")
greetOnce("Hemil")
greetOnce("Dada")