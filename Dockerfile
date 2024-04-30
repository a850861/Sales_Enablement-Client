FROM node:20.11-alpine
WORKDIR /client
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
# COPY vite.config.js .
CMD ["npm","start"]