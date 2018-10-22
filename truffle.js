const HDWalletProvider = require("truffle-hdwallet-provider");

const infura_ropsten = "https://ropsten.infura.io/v3/";
const infura_kovan = "https://kovan.infura.io/v3/";
const infura_rinkeby = "https://rinkeby.infura.io/v3/";
const infura_main = "https://mainnet.infura.io/v3/";

const getho = ""; //getho json-rpc  https://getho.io/
const infura_key = ""; //infura APIkey https://infura.io/
const mnemonic = ""; // metamask 12words mnemonic code https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=ja

const gas = 2000000; //gaslimit default is 4712388
const gasPrice = 1000000000 * 5; //gasPrice 1Gwei * value | example 10Gwei = 1000000000 * 10

module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura_ropsten + infura_key)

      },
      network_id: 3,
      gas: gas,
      gasPrice: gasPrice
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura_kovan + infura_key)
      },
      network_id: 42,
      gas: gas,
      gasPrice: gasPrice
    },
    rinkeby: {
      propvider: function() {
        return new HDWalletPropvider(mnemonic, infura_rinkeby + infura_key)
      },
      network_id: 4,
      gas: gas,
      gasPrice: gasPrice
    },
    "live": {
      provider: function() {
        return new HDWalletProvider(mnemonic, infura_main + infura_key)
      },
      network_id: 1,
      gas: gas,
      gasPrice: gasPrice
    },
    getho: {
      host: getho,
      port: 80,
      network_id: 1010,
      gas: gas,
      gasPrice: gasPrice
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    }
  }
};

