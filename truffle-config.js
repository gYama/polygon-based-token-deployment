const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = process.env.WALLET_PRIVATE_KEY; // 環境変数からウォレットの秘密鍵を取得
const API_KEY = process.env.API_KEY; // 環境変数からAPIキーを取得

module.exports = {
    networks: {
      develop: {
        host: "127.0.0.1",
        port: 8545,
        network_id: "*",
      },
      mumbai: {
        provider: () => new HDWalletProvider(privateKey, "https://rpc-mumbai.maticvigil.com"),
        network_id: 80001,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true,
      },
    },
    compilers: {
        solc: {
          version: "0.8.0", // MyToken.solで指定したSolidityバージョンと一致させる
        },
    }
};
