const Web3 = require('web3');

const customProvider = {
  sendAsync: (payload, cb) => {
    console.log(payload);
    cb(undefined, 100);
  }
}
const provider = Web3.providers.HttpProvider('http://localhost:8081');
const web3 = new Web3(customProvider);

web3.eth.getBlockNumber()
  .then(() => {
    console.log('done!');
  }).catch((err) => {

  });
