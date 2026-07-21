const { text } = require('express')

const prompt = require('prompt-sync')()

const myDebounce = (callback, delay) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

const search = (text) => {
  console.log("Searching for: ", text)
}

const DebounceSearch = myDebounce(search, 2000)
const input = prompt("Search: ")
DebounceSearch(input)
console.log("Waiting .....")