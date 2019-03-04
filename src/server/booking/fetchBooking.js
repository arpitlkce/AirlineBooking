const express = require('express');
const router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/:id', (req, res) => {
    let bookingId = req.params.id;
    console.log('book', path.join(__dirname, '/../dataBase', 'booking.json'));
    if (fs.existsSync(path.join(__dirname, '/../dataBase', 'booking.json'))) {
        fs.readFile(path.join(__dirname, '/../dataBase', 'booking.json'), 'utf8', function readFileCallback (err, result) {
            if (err) {
                console.log(err);
            } else {
                let parsedResult = JSON.parse(result);
                if (parsedResult[bookingId]) {
                    res.send({data: parsedResult[bookingId]});
                } else {
                    res.send({data: 'No Records Found'});
                }
            }
        });
    }
});

module.exports = router;
