// routes/accounts.js
const express = require('express');
const scheduledPaymentsResponse = require('../resources/responses/Scheduled.payments.json');

const router = express.Router();

router.get('/:uuid/scheduled-payments', (req, res) => {
  res.json(scheduledPaymentsResponse);
});

module.exports = router;
