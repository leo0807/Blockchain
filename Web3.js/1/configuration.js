// Http
const Web3HttpProvider = require('web3-providers-http');

const options = {
  keepalive: true,
  withCredentials: false,
  timeout: 20000,
  headers: [
    {
      name: 'Access-Control-Allow-Origin',
      value: '*'
    }
  ],
  agent: {
    http: http.Agent(),
    baseUrl: ''
  }
};
// WebSockets
const provider = new Web3HttpProvider('http://localhost:8545', options);

const Web3WsProvider = require('web3-provider-ws');

const options = {
  timeout: 30000,
  headers: {
    authorization: 'Basic username:password'
  },
  clientConfig: {
    maxReceivedFrameSize: 100000000,
    maxReceivedMessageSize: 100000000,

    keepalive: true,
    keepaliveInterval: 60000,
  },
  // Enable auto reconnection
  reconnect: {
    auto: true,
    delay: 5000,
    maxAttempts: 5,
    onTimeout: false
  }
};

const ws = new Web3WsProvider('ws://localhost:8546', options);