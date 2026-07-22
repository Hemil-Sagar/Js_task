const student = {
  name: "Rahul",
  course: "JavaScript",
}
function introduce(age) {
  console.log(
    `${this.name} is learning ${this.course} and is ${age} years old.`
  )
}

Function.prototype.myCall = function (context, ...args) {
  context.tempFunction = this
  const result = context.tempFunction(...args)
  delete context.tempFunction
  return result
}
introduce.myCall(student, 22)