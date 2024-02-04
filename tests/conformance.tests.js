const axios = require('axios');

const uuid = 'e36dfb06-b007-4dcb-8b99-b9d10451ac12';
const host = 'http://0.0.0.0:9090';
const urlList = [
  '/accounts',
  '/parties',
  `/accounts/${uuid}/balances`,
  `/accounts/${uuid}/transactions`,
  `/accounts/${uuid}/beneficiaries`,
  `/accounts/${uuid}/parties`,
  `/accounts/${uuid}/scheduled-payments`,
  `/accounts/${uuid}/standing-orders`,
];
const config = {
  method: 'get',
  headers: {
    authorization: 'Bearer ',
  },
};

async function runTests() {
  for (let index = 0; index < urlList.length; index++) {
    config.url = host + urlList[index];
    console.log(`=== ENDPOINT TO TEST ${urlList[index]} ===`);
    try {
      await axios.request(config);
      // console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  console.log('=== RESULTS ARE AVAILABLE INSIDE RESULTS FOLDER ===');
}

runTests();
