// payment routes

const express = require('express');
const router = express.Router();

// Example GET route for payments
router.get('/', (req, res) => {
    res.send('Payment routes - GET method');
});

// Example POST route for payments
router.post('/', (req, res) => {
    res.send('Payment routes - POST method');
});

module.exports = router;