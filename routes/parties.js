// routes/accounts.js
const express = require('express');
const identityResponse = require('../resources/responses/Parties.json');
// const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/parties', (req, res) => {
  res.json(identityResponse);
});

module.exports = router;
