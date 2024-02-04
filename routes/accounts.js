// routes/accounts.js
const express = require('express');
const accountsResponse = require('../resources/responses/Accounts.json');

const router = express.Router();

router.get('/accounts', (req, res) => {
  res.json(accountsResponse);
});

module.exports = router;
