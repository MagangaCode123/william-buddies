let fs = require('fs')


//suffix Sync --> synchronous funtion

fs.readFile("exampleFile.txt", (err,data)=>{
    if(err){
        console.error("Error Writing to file")
    }
    console.log('data->',data.toString())
}
)





// fs.stat('exampleFile.txt', (err,stats)=>{
//     if(err){
//         console.log('Error===>',err)
//     }

//     if(stats.isFile()){
//         console.log('this is a simple file')
//     }
// }

// let newString = `\n UserID: 001 - AccessLevel: Admin - Status: 0101
// Login: success | Code: 11001001 | IP: 192.168.0.1
// MSG: HelloWorld - Flag: 101011 - Timestamp: 202507141930
// Device=Mobile | Error=00000000 | Retry=101
// BinaryPayload: 0110101001010110 | Note: Sample transmission`;


// fs.writeFile('exampleFile.txt', "This is an example", (err)=>{
//     if(err){
//         console.error("Error Writing to file")
//     }

//     console.log('File written succesfully')
// })

// fs.appendFile('exampleFile.txt', newString, (err)=>{
//     if(err){
//         console.error("Error Writing to file")
//     }

//     console.log('File written succesfully')
// })







