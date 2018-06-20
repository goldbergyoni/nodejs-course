const fs = require('fs');
const http = require('https');
const Benchmark = require('benchmark');


async function benchmark() {
    const suite = new Benchmark.Suite;
    // add tests
    suite.add('memory-loop', function () {
            var dataToSave;
            for (i = 0; i < 500; i++) {
                dataToSave += Math.random() * i;
            }
        })
        .add('save-to-file', function () {
            fs.appendFileSync('file.txt', dataToSave);
            const fileContent = fs.readFileSync('file.txt');
        })
        // add listeners
        .on('network-call', function (event) {
            http.get('https://google.com', (result) => {

            });
        })
        .on('complete', function () {
            console.log('Fastest is ' + this.filter('fastest').map('name'));
            console.log(this);
        })
        // run async
        .run({
            'async': true
        });

}

benchmark();

// //1. non-IO-operation
// console.time('math1-no-io');
// let dataToSave;
// for (i = 0; i < 500; i++) {
//     dataToSave += Math.random() * i;
// }
// console.timeEnd('math1-no-io');

// //1. IO-operation - files
// console.time('filesave-io');
// fs.appendFileSync('file.txt', dataToSave);
// const fileContent = fs.readFileSync('file.txt');
// console.timeEnd('filesave-io');

// //1. IO-operation - network
// console.time('networkcall-io');
// http.get('https://google.com', (result) => {
//     console.timeEnd('networkcall-io');
// });