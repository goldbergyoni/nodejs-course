const fs = require("fs");
const reverse = require('reverse-string');

class goodMorning {
  constructor() {}

  bless() {
    fs.readFile("students.txt", "utf-8", function(err, data) {
      const studentsArray = data.split(";");
      studentsArray.forEach(student => {
        console.log(`Good Morning ${reverse(student)}!`);
      });
    });
  }
}

module.exports = goodMorning;

new goodMorning().bless();