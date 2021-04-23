# RED TETRIS

## Introduction by 42 School
Everyone knows the Tetris Game and everyone knows Javascript, it only remains to build a Tetris in Javascript.

Yes, but ...

The Tetris will be multiplayer and online. It will allow you to disturb intergalactic parties during your long coding nights (There are still some WIFI issues on some planets).

The Tetris will use the latest technologies Javascript which are at the heart of a great intellectual, industrial and financial battle between Facebook and Google whose challenge is to be the master of the world.

The Tetris will require a lot of brain juice to design the architecture, specify an asynchronous network protocol, implemented in functional programming, create an algorithm of pieces’ animation and display everything graphically in HTML!

Good game, good code ...

## Objectives

The goal of this project is to develop a multiplayer tetris game on the network with a set of software exclusively from Full Stack Javascript.

Front-end has been developed using latest features from ReactJS. State is managed using React Hooks except for sockets and user information for which Redux has been used. Front-end communicates with socket server to handle tetris games and with API to handle user information.

API has been developed using NodeJS and Express. It permits to manage users whom information are stored in MongoDB. Securization of API is done through cors and a middleware checking an auth string.

Socket server has been developed using NodeJS, Express and SocketIO.

## Skills
* Object-oriented programming
* Web
* Functional programming

## Techno
### Front
* react, redux, material-ui, socket.io
* storybook : visualize our different component/page in isolation

### Backend
* nodejs, express, socket.io

### Test
* jest

### Language
* javascript / typescript

### Deployment
* docker

## Preview
### Loby

### In game

## Instalation
### With Docker
```
sudo docker-compose up
then go on this url : http://localhost:8088
```

## Without Docker
### Server
#### Install
```js
npm run srv:install;
```

#### Start Server dev
```js
npm run srv:dev:start
```

#### Start Server prod
```js
npm run srv:prod:build; npm run srv:prod:start;
```

### Client
#### Install
```js
npm run clt:install;
```

#### Start client Dev
```js
npm run srv:dev:start
```

#### Start Client Prod
```js
npm run clt:prod:build; npm run clt:prod:start;
```

## Run test
#### server
```js
npm run srv:test
```
#### client
```js
npm run clt:test
```


## Run storybook
```js
cd src/client; npm run storybook;
```
