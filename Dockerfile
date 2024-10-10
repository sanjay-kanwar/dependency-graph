FROM node:21-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN rm -f package-lock.json && rm -rf node_modules

RUN npm install

COPY . .

RUN npm run build

# RUN npm install -g serve

EXPOSE 3000:3000

CMD ["npm", "run", "dev", "--", "--host", "--no-open"]
# CMD ["serve", "-s", "build", "-l", "3000"]


