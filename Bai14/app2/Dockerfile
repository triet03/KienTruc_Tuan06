# app2/Dockerfile
FROM node:16-alpine

WORKDIR /app
COPY . .

RUN npm install
EXPOSE 3001

CMD ["node", "index.js"]
