const fs = require('fs');
const http = require('https');
const Benchmark = require('benchmark');

function memoryLoop() {
    let dataToSave;
    for (i = 0; i < 500; i++) {
        dataToSave += Math.random() * i;
    }
}

function saveToFile() {
    let dataToSave;
    for (i = 0; i < 100; i++) {
        dataToSave += Math.random() * i;
    }
    fs.appendFileSync('file.txt', dataToSave);
    const fileContent = fs.readFileSync('file.txt');
}

function networkCall() {
    http.get('https://google.com', (result) => {
        result.on('error' , ()=>{

        })

        result.on('close' , ()=>{

        })
    });
}

function showResultsInDiagram(result) {
    var blessed = require('blessed'),
        screen = blessed.screen();
    const contrib = require('blessed-contrib');

    var barCharts = contrib.bar({
        label: 'CPU tasks vs Memory',
        barWidth: 4,
        barSpacing: 6,
        xOffset: 0,
        height: "60%",
        width: "50%",
        maxHeight: 4
    })
    screen.append(barCharts)
    barCharts.setData({
        titles: [result[0].name , result[1].name , result[2].name],
        data: [result[0].time, result[1].time, result[2].time]
    })

    screen.render();
}


async function benchmark() {
    console.time('memory');
    memoryLoop();
    const x = console.timeEnd('memory');
    const y = x * 1000
    const memoryTime = Math.ceil(console.timeEnd('memory') * 1000);

    console.time('file');
    saveToFile();
    const fileTime = Math.ceil(console.timeEnd('file') * 1000);

    console.time('network');
    saveToFile();
    const networkTime = Math.ceil(console.timeEnd('network') * 1000);

    const result = [{name:'memory', time: memoryTime}, {name:'file', time: fileTime}, {name:'network', time: networkTime}]
    showResultsInDiagram(result);
}

benchmark();