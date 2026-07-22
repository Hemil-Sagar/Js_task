let obj = {
  name: 'Saumil'
}

let myFunc = function () {
  console.log(this.name)
}

Function.prototype.myBind = function (obj) {
  const func = this

  return (...args) => {
    func.apply(obj, args)
  }
}

const newFunc = myFunc.myBind(obj)
newFunc()