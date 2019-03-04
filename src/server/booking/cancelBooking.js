const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:id', (req, res) => {
    console.log('id', req.params.id);
    let bookingId = req.params.id;
    if (fs.existsSync(path.join(__dirname, '/../dataBase', 'booking.json'))) {
        fs.readFile(path.join(__dirname, '/../dataBase', 'booking.json'), 'utf8', function readFileCallback (err, result) {
            if (err) {
                console.log('not found', err);
            } else {
                let parsedResult = JSON.parse(result);
                if (parsedResult[bookingId]) {
                    delete parsedResult[bookingId];
                }
                let json = JSON.stringify(parsedResult);
                fs.writeFile(path.join(__dirname, '/../dataBase', 'booking.json'), json, 'utf8', callback);
                res.send({ data: bookingId });
            }
        });
    }
});

let callback = () => {
    console.log('I am callback');
};

module.exports = router;
