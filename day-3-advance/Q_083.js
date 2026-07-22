const flattenObject = (obj) => {
  const result = {}
  const flatten = (currentObj, parentKey) => {
    for (const key in currentObj) {
      const newKey = parentKey ? `${parentKey}.${key}` : key

      if (typeof currentObj[key] === "object" && currentObj[key] !== null && !Array.isArray(currentObj[key])) {
        flatten(currentObj[key], newKey)
      } else {
        result[newKey] = currentObj[key]
      }
    }
  }
  flatten(obj, "")
  return result
}

const person = {
  name: "Saumil",
  age: 22,
  address: {
    city: "Ahmedabad",
    state: "Gujarat"
  }
}

console.log(flattenObject(person))