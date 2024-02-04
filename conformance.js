const express = require('express');

const app = express();
const accountsRoute = require('./routes/accounts');
const balanceRoute = require('./routes/balance');
const identityRoute = require('./routes/parties');
const transactionsRoute = require('./routes/transactions');
const accountsPartiesRoute = require('./routes/accounts.parties');
const beneficiariesRoute = require('./routes/beneficiaries');
const scheduledPaymentsRoute = require('./routes/scheduled.payments');
const standingOrdersRoute = require('./routes/standing.orders');

const accountsPath = '/accounts';
const port = 3000; // You can change the port if needed

app.use('/', accountsRoute);

app.use('/', identityRoute);

app.use(accountsPath, balanceRoute);

app.use(accountsPath, transactionsRoute);

app.use(accountsPath, accountsPartiesRoute);

app.use(accountsPath, scheduledPaymentsRoute);

app.use(accountsPath, beneficiariesRoute);

app.use(accountsPath, standingOrdersRoute);

app.listen(port, () => {
  console.log(`You can now check API conformance at http://localhost:${port}`);
});
