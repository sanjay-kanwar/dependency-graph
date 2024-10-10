FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN rm -f package-lock.json

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000:3000

CMD ["npm", "run", "dev", "--", "--host", "--no-open"]

