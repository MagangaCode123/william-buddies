//if statement
/**
 * if a criteria is met, perform a certain operation
 * 
 * else if another criteria is met, perform an operation
 * 
 * else no criteria is met , break or perform an operation
 */

let role = "student"

if(role == 'student'){
    //show students dashboard
}
else if(role == 'teacher'){
    //shoe teachers dashboard
}
else if(role == 'parent'){
    //shoe parents dashboard
}
else{
    //show unauthorized page
}

let progress = 87

if(progress > 0 && progress <= 30){
    //show red color
}
else if(progress > 30 && progress <= 50){
    //show blue color
}
else if(progress > 50){
    //show green color
}
else {
    //show white
}


//user authentication


/**
 * 
 * when using switch statements use when comparing discrete values rather than expressions
 */

function userAuth (pwd){
    if(pwd.length < 8 && pwd !== "Admin@123"){
        console.log('Password length is less than 8') 
        return
    }
    else if(pwd === "Admin@123"){
        console.log('Login Successful')
        return
    }
    else{
        console.log('Invalid login credentials')
        return
    }
       
}


let category = 'Bags'

switch(category){
    case 'Bags':
        console.log('Ypu are in Bag Section')
        break
    case 'Shoes':
        console.log('Ypu are in Shoes Section')
        break
    case 'Electronics':
            console.log('Ypu are in Electronics Section')
            break
    default:
            console.log('Category not available')
}



// let numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]

// var sum = 0;
// var i = 0;

// //while executes until a certain condition is met
// while ( i < numbers.length ) {
//     sum += numbers[i]; // sum = sum +  numbers[i] ===> 0 + 19
//     console.log(i)
//     console.log(sum)
//     i += 1;
//     console.log(i)
// }

// console.log( 'The loop was executed ' + i + ' times' );
// console.log(sum)


//do..while===> it performs an operations once before it checks on the while loop
// var numbers2 = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

// var sum = 0;
// var i = 0;
// do {
    
//     i += 1;
// } while ( i < 3){
//     sum += numbers2[i]; 
//     console.log(i)
    
//     i += 1;
//     console.log(i)
//     console.log(sum)
// }

// console.log( 'The loop was executed ' + i + ' times' );
// // prints The loop was executed 10 times

// console.log(sum);


let sum = 0

let numbers2 = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

let strings = ['apples', 'bananas', 'mangoes', 'oranges']
let newArray;

for(el of numbers2){
    console.log(el)
    sum += el

}

const newFunction = (el) => {
    const word = el.split('')

    console.log(word[0])
    
   }

for (el of strings){
    console.log(el.substring(0,1).toUpperCase() + el.substring(1))



   
   newFunction(el)
}

let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

days.push("Saturday")

console.log(days)

days.unshift("Sunday")

console.log(days.unshift("Sunday"))
console.log(days.push("Another Week"))

console.log(days.pop())
console.log(days.shift())




