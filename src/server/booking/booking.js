const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
    if (fs.existsSync(path.join(__dirname, '/../dataBase', 'booking.json'))) {
        fs.readFile(path.join(__dirname, '/../dataBase', 'booking.json'), 'utf8', function readFileCallback (err, result) {
            if (err) {
                console.log(err);
            } else {
                let parsedResult = JSON.parse(result);
                let bookingId = parseInt(Object.keys(parsedResult).pop()) + 1;
                parsedResult[bookingId] = req.body;
                let json = JSON.stringify(parsedResult);
                fs.writeFile(path.join(__dirname, '/../dataBase', 'booking.json'), json, 'utf8', callback); // write it back
                res.send({ data: bookingId });
            }
        });
    } else {
        let data = {1: req.body};
        let json = JSON.stringify(data);
        fs.writeFile(path.join(__dirname, '/../dataBase', 'booking.json'), json, 'utf8', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('The file was created!');
            let bookingId = 1;
            res.send({ data: bookingId });
        });
    }
});

let callback = () => {
    console.log('I am callback');
};

module.exports = router;
