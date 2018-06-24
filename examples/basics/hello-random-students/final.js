var fs = require('fs');
var terminal = require('terminal-kit').terminal;
var blessed = require('blessed'),
    contrib = require('blessed-contrib'),
    screen = blessed.screen();

class studentService {
    getWinner() {
        const allStudents = fs.readFile('./students.txt', 'utf-8', function (error, data) {
            const studentsArray = data.split(';');
            var pic = contrib.picture(
                { file: './goodmorning.png'
                , cols: 25
                , onReady: (ready)})
             function ready() {screen.render()}
    
            studentsArray.forEach(student => {
                console.log(`Good morning ${student}`)
            });
        })
    }
}

new studentService().getWinner();

module.exports.studentService = studentService;
module.exports.number = 1;