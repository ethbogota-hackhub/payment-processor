require('dotenv').config();
const INFURA_KEY = process.env.INFURA_KEY;
const privateKey = process.env.DEPLOYER_PRIVATE_KEY;

const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    ropsten: {
      provider: () => new HDWalletProvider(privateKey, `https://ropsten.infura.io/v3/${INFURA_KEY}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 1,    // # of confirmations to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,    // Skip dry run before migrations? (default: false for public nets )
      networkCheckTimeout: 1000000,
      timeoutBlocks: 200
    },
    matic: {
      provider: () => new HDWalletProvider(privateKey, `https://polygon-mumbai.gateway.pokt.network/v1/lb/12c2cad0f0f027914fd8687c`),
      network_id: 80001,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 2000,
      networkCheckTimeout: 1000000,
      skipDryRun: true
    },

  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
