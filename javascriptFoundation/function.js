


// function printFizzBuzz (){

//     //define a variable
    

//     for(let i = 1; i <= 100; i++){

//         if(i % 3 === 0 && i % 5 === 0){
//             console.log(`${i}---->Fizzbuzz`)
//         }
//         else if(i % 3 === 0){
//             console.log(`${i}---->Fizz`)
//         }
//         else if(i % 5 === 0){
//             console.log(`${i}---->Buzz`)
//         }
//         else{
//             console.log(`${i}`)
//         }
//     }


    
// }

// printFizzBuzz()




console.log('school'.split('').reverse().join(''))


function reverseString (str){
    let i = str.length
    let j = []
    for(i; i--;){
        j.push(str[i])

    }

    return j.join('')
    
}



// reverseString("school")
// console.log(reverseString("school"))