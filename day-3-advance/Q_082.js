const myFlatten = (array) => {
  const result = []
  const flatten = (arr) => {
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])) {
        flatten(arr[i])
      } else {
        result.push(arr[i])
      }
    }
  }
  flatten(array)
  return result
}

const number = [1, [2, 3], [4, 5, 6], 7]

console.log(myFlatten(number))