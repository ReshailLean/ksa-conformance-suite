// routes/accounts.js
const express = require('express');
const standingOrdersResponse = require('../resources/responses/Standing.orders.json');

const router = express.Router();

router.get('/:uuid/standing-orders', (req, res) => {
  res.json(standingOrdersResponse);
});

module.exports = router;
