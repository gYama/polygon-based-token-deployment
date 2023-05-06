# polygon-based-token-deployment
This project demonstrates how to deploy a custom ERC20 token on the Polygon Mumbai Testnet using Truffle, OpenZeppelin, and Docker.
## Prerequisites

- Docker
- Node.js (version 14)
- MetaMask Wallet
- Mumbai Testnet funds

## Setup

1. Clone the repository.

```bash
git clone https://github.com/gYama/polygon-based-token-deployment.git
```

2. Change the directory.
```bash
cd polygon-based-token-deployment
```

3. Create a .env file in the project root with the following variables:
```bash
WALLET_PRIVATE_KEY=your_metamask_wallet_private_key
API_KEY=your_polygon_rpc_api_key
```
Replace your_metamask_wallet_private_key with your MetaMask wallet's private key and your_polygon_rpc_api_key with your RPC API key from a service like [Infura](https://app.infura.io/).

4. Build the Docker container.
```bash
docker build -t polygon-based-token-deploy .
```

5. Run the Docker container.
```bash
docker run -it --env-file .env --name polygon-based-token-deploy-container polygon-based-token-deploy
```

6. Inside the Truffle console, deploy the token to the Mumbai Testnet.
```bash
truffle migrate --network mumbai
```

7.Verify the token deployment and interact with it using Truffle console commands.

## Customizations
In this project, we have implemented a custom ERC20 token called MyToken. Additionally, we have added a feature to allow only specific NFT holders to receive the tokens. To further customize the token, modify the MyToken.sol smart contract file.

## License
This project is licensed under the MIT License.

