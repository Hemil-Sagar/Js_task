const memoize = (callback) => {
    const cache = {} 
    return (...args) => {
        const key = JSON.stringify(args) 
        if (cache[key] !== undefined) {
            console.log("From Cache") 
            return cache[key] 
        }
        console.log("Calculating...") 
        const result = callback(...args) 
        cache[key] = result 
        return result
    } 
}

const square = (num) => {
  return num * num
}

const memoizedSquare = memoize(square)
console.log(memoizedSquare(5))
console.log(memoizedSquare(5))
console.log(memoizedSquare(10))
console.log(memoizedSquare(10))