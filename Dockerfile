FROM node:18.13
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
ENTRYPOINT npm run start