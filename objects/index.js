
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


let newArray = [student, student2, student3]

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


