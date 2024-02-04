#!/bin/bash

# Run your conformance.js script
node ./conformance.js

# Run the wiretap command
wiretap -u http://0.0.0.0:3000 -s ./resources/KSA.AccountInformationServices.yaml --stream-report --report-filename ./reports/conformance-report.json

# Start the server
npm run test
