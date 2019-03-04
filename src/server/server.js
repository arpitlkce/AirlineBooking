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
