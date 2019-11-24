const fs = require('fs')
const util = require('util')
const writeFilePromisified = util.promisify(fs.writeFile)

async function saveFile() {
    console.log("Start")
    console.time('files');
    const writeFile1 = writeFilePromisified("123.txt", "Hey Fiverr");
    const writeFile2 = writeFilePromisified("456.txt", "Yeah");
    const writeFile3 = writeFilePromisified("789.txt", "Yeah");
    console.log("2");
    Promise.all([
        [writeFile1, writeFile2, writeFile3]
    ]).then(() => {
        console.log("Got files")
        console.timeEnd('files');
    })

}


saveFile();




//const writeFile = util.promisify(fs.writeFile);
// async function saveFile(){
//     console.log("Start")
//     console.time('files');

//     Promise.all([writeFile1 , writeFile2]).then(() =>{
//         console.log("Got files")
//         console.timeEnd('files');
//     })
//     console.log("Finish")
// }

// saveFile();