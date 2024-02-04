// routes/accounts.js
const express = require('express');
const transactionsResponse = require('../resources/responses/Transactions.json');
// const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/:uuid/transactions', (req, res) => {
  res.json(transactionsResponse);
});

module.exports = router;
