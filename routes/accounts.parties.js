// routes/accounts.js
const express = require('express');
const accountsPartiesResponse = require('../resources/responses/Accounts.parties.json');
// const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/:uuid/parties', (req, res) => {
  res.json(accountsPartiesResponse);
});

module.exports = router;
