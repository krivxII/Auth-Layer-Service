FROM node:14.17.3-alpine

WORKDIR /usr/src/apiGateway

COPY ./src/package*.json ./

RUN npm install

COPY . .

ARG URL_API
ENV URL_API $URL_API
ARG PORT
ENV PORT $PORT

WORKDIR /usr/src/apiGateway/src/

CMD [ "node", "index.js" ]