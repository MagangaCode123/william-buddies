
const student = {
    name: 'John Doe',
    age: 21,
    class: 'Software Engineering',
    classType: 'Online',
    classTime: 'Night',
    guild: 'William Buddies'

}

const student2 = {
    name: 'Jane Doe',
    age: 20,
    class: 'Software Engineering',
    classType: 'Online',
    classTime: 'Night',
    guild: 'William Buddies'

}



const student3 = {
    name: 'Brother James',
    age: 22,
    class: 'Software Engineering',
    classType: 'Online',
    classTime: 'Night',
    guild: 'Snow Flurry'

}


const listing1 = {
    type: 'AirBnb',
    builtin: '2021',
    location: 'Kisumu,Donga',
    ownerPhone: '12345678'
}

const listing2 = {
    type: 'Rent',
    builtin: '2021',
    location: 'Nairobi,Lavington',
    ownerPhone: '12345678'
}

const listing3 = {
    type: 'Rent',
    builtin: '2021',
    location: 'Nonbasa,maweni',
    ownerPhone: '12345678'
}


let listingObj = {listing1,listing2,listing3}
let otherListingObj = {...listing1}

let customerSubscription = {
    status: "active",
    paymentAt: Date.now(),
    type: 'Rent',
  builtin: '2024',
  location: 'Nakuru,Shabaab',
  ownerPhone: '01129384893',



}

let hasPaid = false

if(hasPaid){
    customerSubscription.paidStatus = 'active'
}

if("paidStatus" in customerSubscription){
    console.log('customer has paid')
}
else{
    console.log('Lock out user from premium purchase')
}

let {status, type} = customerSubscription

status = 'booked'

console.log(status)

console.log(Object.keys(customerSubscription))
console.log(Object.values(customerSubscription))

console.log(Object.entries(customerSubscription))

console.log(Object.hasOwn(customerSubscription, 'builtin'))
let entriesArray = Object.entries(customerSubscription)

console.log(entriesArray[3])


otherListingObj = {...otherListingObj,...customerSubscription}


console.log('other====>',otherListingObj)

let newArray = [student, student2, student3]

console.log(newArray)

let oneBigObj = {student}



/**
 * 
 * {
 *  name: 'John Doe',
    age: 21,
    class: 'Software Engineering',
    classType: 'Online',
    classTime: 'Night',
    guild: 'William Buddies',
    student2:{
    name: 'Jane Doe',
    age: 20,
    class: 'Software Engineering',
    classType: 'Online',
    classTime: 'Night',
    guild: 'William Buddies'

}
 * }
 * 
 * 
 * 
 */

oneBigObj = {...oneBigObj,student2 }

console.log(oneBigObj.student2)


let names = newArray.map(obj => obj.name) //dot notation
let otherNames = newArray.map(obj => obj['name']) //bracket notation

console.log('names===>',names)
console.log('names===>',otherNames)




const guild = {
    name: 'William Buddies',
    students: 2,
    instructor: 'John Murife',
    countStudents: function(arr){
        let guildCount = arr.filter(el => el.guild === 'William Buddies')
        
        return guildCount.length
    }

}


console.log(guild.countStudents(newArray))


