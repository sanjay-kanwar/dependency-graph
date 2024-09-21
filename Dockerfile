FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

#RUN npm install -g serve

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000:3000

CMD ["npm", "run", "dev", "--", "--host", "--no-open"]

