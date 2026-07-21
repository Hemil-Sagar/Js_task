const deepClone = (obj) => {

    if (obj === null || typeof obj !== "object") {
        return obj 
    }

    const clone = Array.isArray(obj) ? [] : {} 

    for (const key in obj) {
        clone[key] = deepClone(obj[key]) 
    }

    return clone 

} 

const student = {

    name: "Hemil",

    age: 22,

    address: {

        city: "Ahmedabad",

        state: "Gujarat"

    }

} 

const copy = deepClone(student) 

copy.address.city = "Surat" 

console.log(student) 

console.log(copy) 