const api = require('./entry-points/api');
const package = require('../package.json');

//✅ Best Practice: include version name at some or all log statements
console.log(`${package.name} is starting. Version ${package.version}`)
api();
