const compose = (...functions) => {
    return (value) => {
        return functions.reduceRight((result, func) => {
            return func(result) 
        }, value) 
    } 
} 
const double = (num) => num * 2 
const square = (num) => num * num 
const process = compose(
    square,
    double
) 
console.log(process(5))