FROM node:alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 1234

CMD ["node", "app_new.js"]  