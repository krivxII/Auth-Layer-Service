FROM node:14.17.3-alpine

WORKDIR /usr/src/apiGateway

COPY ./src/package*.json ./

RUN npm install

COPY . .

ARG URL_CORREO
ENV URL_CORREO $URL_CORREO
ARG URL_REDIS
ENV URL_REDIS $URL_REDIS
ARG PORT
ENV PORT $PORT

WORKDIR /usr/src/apiGateway/

CMD [ "node", "index.js" ]