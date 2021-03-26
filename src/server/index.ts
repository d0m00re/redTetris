// src/server.ts
import express from "express";
import path from "path";
import cors from 'cors';

import { Global } from './entity/Global';
import { TetriminosGenerator } from './entity/TetriminosGenerator';

import {
  SOCKET_SEND_USERNAME,
  SOCKET_JOIN_ROOM,
  SOCKET_GET_NEXT_TETRIMINOS,
  SOCKET_RUN_GAME,
  SOCKET_USER_DEAD,
  SOCKET_PATCH_USER,
  SOCKET_UPDATE_USER_TETRI_BOARD,
  SOCKET_LEAVE_ROOM,
  SOCKET_PLAY_AGAIN,
  SOCKET_LINE_DELETE
} from './constant/socket';

import login from './action/Login/login';
import logout from './action/Login/logout';

import leaveRoom from "./action/Room/leave";
import joinRoom from './action/Room/join';
import nextTetriminos from './action/Game/Tetriminos/Next';
import playAgain from './action/Game/playAgain';
import userDead from "./action/Game/userDead";
import runGame from "./action/Game/run";
import shadowBroadcast from "./action/Game/Shadow/shadowBroadcast";
import lineDelete from "./action/Game/lineDelete";


let global: Global = new Global();

let tetriGenerator = new TetriminosGenerator();

const app = express();
app.use(cors())
app.set("port", process.env.PORT || 4242);

let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http, {
  cors: {
    origin: "*",
  }
}); 

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/index.html"));
});

io.on("connection", function (socket: any) {

  socket.on('disconnecting', () => {
    console.log('user disconnect : ' + socket.username);
    logout(io, socket, global);
  })

  socket.on(SOCKET_SEND_USERNAME, function (username: string) {
    login(io, socket, global, username);
  });


  socket.on(SOCKET_PLAY_AGAIN, function () {
    playAgain(io, socket, global);
  });

  socket.on(SOCKET_USER_DEAD, function () {
    userDead(io, socket, global);
  })

  socket.on(SOCKET_JOIN_ROOM, function (roomName: string) {
    console.log('SOCKET_JOIN_ROOM : ' + roomName);
    joinRoom(io, socket, global, roomName);
  });

  socket.on(SOCKET_GET_NEXT_TETRIMINOS, () => {
    nextTetriminos(io, socket, global, tetriGenerator);
  })

  socket.on(SOCKET_RUN_GAME, (payload: string) => {
    runGame(io, socket, global, payload, tetriGenerator);
  })

  socket.on(SOCKET_UPDATE_USER_TETRI_BOARD, (saveTetriBoard: number[][]) => {
    shadowBroadcast(io, socket, global, saveTetriBoard);
  })

  socket.on(SOCKET_LINE_DELETE, (nbLineDelete: number) => {
    lineDelete(io, socket, global, nbLineDelete);
  })

  socket.on(SOCKET_LEAVE_ROOM, () => {
    leaveRoom(io, socket, global);
  })
});

const server = http.listen(4242, function () {
  console.log("listening on *:4242");
});