// routes/accounts.js
const express = require('express');
const balanceResponse = require('../resources/responses/Balance.json');
// const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/:uuid/balances', (req, res) => {
  res.json(balanceResponse);
});

module.exports = router;
