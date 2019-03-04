const express = require('express');
const router = express.Router();

const login = require('./login/login');
const fetchFlight = require('./fetchFlight/fetchFlight');
const bookFlight = require('./booking/booking');
const fetchBookedFlight = require('./booking/fetchBooking');
const cancelBooking = require('./booking/cancelBooking');

router.use('/login', login);
router.use('/fetchFlight', fetchFlight);
router.use('/bookFlight', bookFlight);
router.use('/cancelBooking', cancelBooking);
router.use('/fetchBooking', fetchBookedFlight);

module.exports = router;
