const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    let {userName, password} = req.body;
    let response = {};
    if (userName === password) {
        response.auth = true;
        response.message = 'Login Successful';
    } else {
        response.auth = false;
        response.message = 'Incorrect UserName and  Password';
    }
    res.send({ data: response });
});

module.exports = router;
