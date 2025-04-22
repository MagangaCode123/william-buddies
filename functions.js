

const var1 = function myFunction (x,y){
    return x + y
}

//arrow functions
const example2 = (x,y) => {
    return x + y
}


const defaultValues = function addNumbers(x=4,y=5){

    return x + y 
}

console.log(var1(2,3))
console.log(var1(4,3))
console.log(example2(4,4))
console.log(defaultValues(20,20))


