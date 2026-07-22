const person = {
  name: "Saumil"
}

function greet(city, country) {
  console.log(`${this.name} lives in ${city}, ${country}`)
}

Function.prototype.myApple = function (context, args) {
  context.tempFunction = this
  const result = context.tempFunction(...args)
  delete context.tempFunction
  return result
}

greet.myApple(person, ["Ahmedabad", "India"])