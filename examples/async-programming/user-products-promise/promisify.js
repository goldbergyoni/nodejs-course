const fs = require('fs')
const util = require('util')

async function saveFile() {
    console.log("Start")
    console.time('files');
    
    console.log("Got files")
    console.timeEnd('files');

}




//const writeFile = util.promisify(fs.writeFile);
// async function saveFile(){
//     console.log("Start")
//     console.time('files');
//     const writeFile1  = writeFile("123.txt" , "Hey Fiverr");
//     const writeFile2  = writeFile("456.txt" , "Yeah");
//     Promise.all([writeFile1 , writeFile2]).then(() =>{
//         console.log("Got files")
//         console.timeEnd('files');
//     })
//     console.log("Finish")
// }

// saveFile();