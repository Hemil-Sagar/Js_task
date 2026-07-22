const add = (a) => {
  return (b) => {
    return a + b
  }
}

console.log(add(10)(20))