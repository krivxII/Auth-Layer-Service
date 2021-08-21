FROM node:14.17.3-alpine

WORKDIR /usr/src/redisServer

COPY ./src/package*.json ./

RUN npm install

COPY . .

ARG CORREO_ELECTRONICO
ENV CORREO_ELECTRONICO $CORREO_ELECTRONICO
ARG CONTRASENA
ENV CONTRASENA $CONTRASENA
ARG PORT
ENV PORT $PORT

WORKDIR /usr/src/redisServer/src/

CMD [ "node", "index.js" ]