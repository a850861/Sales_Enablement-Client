FROM node:20.11-alpine
WORKDIR /client
COPY package.json .

RUN npm i and npm i --force google-maps-react

COPY . .
EXPOSE 3000

CMD ["npm","start"]