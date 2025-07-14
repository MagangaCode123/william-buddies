let eventEmmitter = require('events')



let newEvent = new eventEmmitter.EventEmitter()

newEvent.on('greeting', (name)=>{
    console.log('Hi my name is: ', name)
})

//

newEvent.on('connection',connectServer)


const connectServer = () =>{
    //connects to the terminal
    //returns a message conneced succesfully
}
//printed first
console.log('Test this')

//run this event
newEvent.emit('greeting', 'John')