require('dotenv').config();
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-truffle5');
require("@nomiclabs/hardhat-etherscan");
require('hardhat-gas-reporter');
require('solidity-coverage');
require('@nomiclabs/hardhat-solhint');
require('hardhat-contract-sizer');
require('@openzeppelin/hardhat-upgrades');

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: {
    version: '0.6.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mainnet: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    testnet: {
      url: `https://rpcapi-tracing.testnet.fantom.network`,
      chainId: 4002,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/ff21521dcf6745908bd33d52f5a66297`,
      chainId: 3,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    kovan: {
      url: `https://kovan.infura.io/v3/ff21521dcf6745908bd33d52f5a66297`,
      chainId: 42,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    coverage: {
      url: 'http://localhost:8555',
    },
    
    localhost: {
      url: `http://127.0.0.1:8545`
    },
  },
  etherscan: {
    apiKey: '7GRISDBV9BKDN565SZDZXG6MT9RJMGPSRH'
  }
};
