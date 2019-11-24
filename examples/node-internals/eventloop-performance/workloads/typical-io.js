const util = require("util");
const fs = require("fs");
const content = require('./small-json.json');
const createFilePromise = util.promisify(fs.writeFile);
const uuidv1 = require("uuid/v1");

console.log("Doing some IO");
if (!fs.existsSync("data")){
    fs.mkdirSync("data");
}

module.exports = async() => {
    await createFilePromise(`./data/${uuidv1()}.txt`, content);
    await createFilePromise(`./data/${uuidv1()}.txt`, content);
}