FROM node:22.2.0

WORKDIR /app

COPY package.json .

ENV HUSKY=0

RUN yarn