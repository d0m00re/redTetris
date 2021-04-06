FROM node:14.5

WORKDIR /usr/src/app

# wtf * don t work
COPY ./package.json ./
COPY ./package-lock.json ./

COPY . .

RUN npm install

EXPOSE 4242

CMD ["npm", "start"]