FROM node:14

RUN mkdir -p /app
WORKDIR /app

COPY . /app
RUN npm install

# デプロイテスト用（トークンが仮想ネットワーク上にデプロイされる）
# CMD ["npm", "run", "develop"]

# Mumbaiへのデプロイ用（トークンがMumbaiネットワークにデプロイされる）
CMD ["npm", "run", "deploy-mumbai"]
