const myThrottle = (callback, delay) => {
  let canRun = true
  return (...args) => {
    if (!canRun) {
      return
    }
    callback(...args)
    canRun = false
    setTimeout(() => {
      canRun = true
    }, delay)
  }
}

const printMessage = (message) => {
  console.log(message)
}

const throttledPrint = myThrottle(printMessage, 3000)

throttledPrint("Hello 1")
throttledPrint("Hello 2")
throttledPrint("Hello 3")

setTimeout(() => {
  throttledPrint("Hello 4")
}, 4000)