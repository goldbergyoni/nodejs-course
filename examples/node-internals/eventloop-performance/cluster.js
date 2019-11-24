const cluster = require('cluster')
const os = require('os')
const express = require('express')
const bigArray = require('./workloads/big-array')
const typicalIO = require('./workloads/typical-io')

if (cluster.isMaster) {
    const cpuCount = os.cpus().length
    for (let i = 0; i < cpuCount; i++) {
        cluster.fork()
    }
} else {
    const app = express()

    app.post('/', async(req, res) => {
        const randomNumber = Math.ceil(Math.random() * 40);
        if (randomNumber === 20) {
            console.log("CPU now");
            //encryptedContent = //await scriptPromisified(JSON.stringify(content) , "saltysalty" , 64);
            //encryptedContent = crypto.scryptSync(JSON.stringify(content), "saltysalty", 64);
            bigArray();
        }

        await typicalIO();
        res.json().end();
    })

    const port = process.env.PORT || 8080

    app.listen(port)

    console.log('app is running on port', port)
}

cluster.on('exit', (worker) => {
    console.log('mayday! mayday! worker', worker.id, ' is no more!')
    cluster.fork()
})