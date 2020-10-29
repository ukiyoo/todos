FROM node:latest as node

WORKDIR /app/frontend
COPY package.json /app/frontend
COPY package-lock.json /app/frontend

RUN npm install

EXPOSE 3000
CMD ["npm", "start"]