// routes/accounts.js
const express = require('express');
const beneficiariesResponse = require('../resources/responses/Beneficiaries.json');
// const { v4: uuidv4 } = require('uuid');
const router = express.Router();

router.get('/:uuid/beneficiaries', (req, res) => {
  res.json(beneficiariesResponse);
});

module.exports = router;
