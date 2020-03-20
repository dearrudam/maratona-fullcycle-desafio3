FROM node:12.14.0-alpine3.11
WORKDIR /app

COPY . .
RUN npm install

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "start:prod"]