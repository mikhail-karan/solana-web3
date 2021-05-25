const {Connection, PublicKey} = require('@solana/web3.js');

async function getInfo() {
  const url = 'https://api.mainnet-beta.solana.com'
  const web3 = new Connection(url)
  const slot = await web3.getSlotLeader()
  console.log('This is the slot leader: ', slot)
  const pubKey = new PublicKey(slot)
  const leaderAccountInfo = await web3.getAccountInfo(pubKey)
  console.log('This is the leaders account info: ', leaderAccountInfo)
  const leaderBalance = await web3.getBalance(pubKey)
  console.log('This is the leaders balance: ', leaderBalance)
  const nodeList = await web3.getVoteAccounts()
  console.log('This is a list of accounts in cluster: ', nodeList)
}

getInfo();


//We'll use this to run a node server
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3500;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });