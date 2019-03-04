const express = require('express');
const router = express.Router();
var fs = require('fs');
var path = require('path');

let getData = (depart, arrival, res, journeyType) => {
    let flights = [];
    fs.readFile(path.join(__dirname, '/../dataBase', 'flightInventory.json'), 'utf8', function readFileCallback (err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data);
            obj.flightsData.forEach(function (val, index) {
                if (depart === val.departureAirportCode && arrival === val.arrivalAirportCode) {
                    flights.push(val);
                }
            });
            res.send({ data: {journeyType: journeyType, flightsData: flights} });
        }
    });
};

let getReturnData = (depart, arrival, res, journeyType) => {
    let flightsOneWay = [];
    let flightsReturn = [];
    fs.readFile(path.join(__dirname, '/../dataBase', 'flightInventory.json'), 'utf8', function readFileCallback (err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data);
            obj.flightsData.forEach(function (val, index) {
                if (depart === val.departureAirportCode && arrival === val.arrivalAirportCode) {
                    flightsOneWay.push(val);
                }
                if (arrival === val.departureAirportCode && depart === val.arrivalAirportCode) {
                    flightsReturn.push(val);
                }
            });
            res.send({ data: {journeyType: journeyType, flightOneWay: flightsOneWay, flightReturn: flightsReturn} });
        }
    });
};

router.post('/', (req, res) => {
    // Demo for concurrency

    if (req.body.journeyType === 'single') {
        getData(req.body.departureAirportCode, req.body.arrivalAirportCode, res, req.body.journeyType);
    } else {
        getReturnData(req.body.departureAirportCode, req.body.arrivalAirportCode, res, req.body.journeyType);
    }
});

module.exports = router;
