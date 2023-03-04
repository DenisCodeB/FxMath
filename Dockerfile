FROM node
WORKDIR /app
RUN npm i
RUN npm run build