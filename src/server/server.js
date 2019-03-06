const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// console.log that your server is up and running

/* if (process.env.NODE_ENV !== 'test') {
    module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
} */



module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));

const routes = require('./routes');

app.use('/', routes);


/*const routes = require('./routes');

var cluster = require('cluster');

if(cluster.isMaster) {
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    for(var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    cluster.on('online', function(worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });
} else {
    module.exports = app.listen(port, () => console.log(`Listening on port ${port} on process ${process.pid}`));
    app.use('/', routes);

}*/
