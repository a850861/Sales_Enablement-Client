FROM node:20.11-alpine
WORKDIR /client
COPY package.json .
RUN npm i and npm i --force @vis.gl/react-google-maps
COPY . .
EXPOSE 3000

CMD ["npm","start"]