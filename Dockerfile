FROM node:14.17-alpine
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY ./ ./
CMD ["npm","start"]