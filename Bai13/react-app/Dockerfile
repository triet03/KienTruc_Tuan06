# react-app/Dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY . .
RUN npm install && npm run build
