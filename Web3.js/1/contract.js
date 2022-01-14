const Web3 = require('web3');

const provider = Web3.providers.HttpProvider();

const web3 = new Web3('http://localhost:8081');
console.log(web3.eth);

// const contract = new web3.eth.Contract(
//   abi,
//   address
// );
