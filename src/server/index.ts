// src/server.ts
import express from "express";
import path from "path";
import cors from 'cors';

import {IUser, UserList} from './entity/User';
import {IRoom, ERoomState} from './entity/Room';
import {IGlobal, Global} from './entity/Global';
import {ITetriminos, TetriminosGenerator} from './entity/TetriminosGenerator';
 
export const SOCKET_SEND_USERNAME = 'SOCKET_SEND_USERNAME';
export const SOCKET_RECV_USERNAME = 'SOCKET_RECV_USERNAME'; 
export const SOCKET_JOIN_ROOM = 'SOCKET_JOIN_ROOM';
export const SOCKET_CONFIRM_JOIN_ROOM = 'SOCKET_CONFIRM_JOIN_ROOM';
export const SOCKET_GET_ALL_ROOMS = 'SOCKET_GET_ALL_ROOMS';
export const SOCKET_ALL_ROOMS = 'SOCKET_ALL_ROOM';

export const SOCKET_NEW_ROOM = 'SOCKET_NEW_ROOM';

export const SOCKET_GET_NEXT_TETRIMINOS = 'SOCKET_GET_NEXT_TETRIMINOS';

export const SOCKET_RUN_GAME = 'SOCKET_RUN_GAME';

export const SOCKET_UPDATE_ROOM = 'SOCKET_UPDATE_ROOM';

export const SOCKET_SEND_TETRIMINOS = 'SOCKET_SEND_TETRIMINOS';

export const SOCKET_USER_DEAD = 'SOCKET_USER_DEAD';

export const SOCKET_PATCH_ROOM = 'SOCKET_PATCH_ROOM';

export const SOCKET_PATCH_USER = 'SOCKET_PATCH_USER';

export const SOCKET_UPDATE_USER_TETRI_BOARD = 'SOCKET_UPDATE_USER_TETRI_BOARD';

let global : Global = new Global();

let tetriGenerator =  new TetriminosGenerator();

const app = express();
app.use(cors())
app.set("port", process.env.PORT || 4242);

let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http, {
  cors: {
    origin: "http://0.0.0.0:8088",
    methods: ["GET", "POST"]
  }
});

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/index.html"));
});

io.on("connection", function (socket: any) {

  socket.on(SOCKET_USER_DEAD, function() {
    console.log('SOCKET USER DEAD');
    
    // update room with user dead server side
    let userUpdate = global.setUserDeadInRoom(socket.username);
    // room update - client side
    console.log(userUpdate);
    
    if (userUpdate !== undefined)
    {
      console.log('user update');
      
      io.emit(SOCKET_PATCH_USER, userUpdate);
    }
  })
 
  socket.on(SOCKET_SEND_USERNAME, function (username: string) {
    socket.username = username;
    let user: IUser = { name: username, uuid: socket.id, room: '' };
    global.createUser(user);
    // send back username :
    socket.emit(SOCKET_RECV_USERNAME, {username : user.name,
                                   error : false,
                                   errorMsg : ''});
    // emit all room    
    io.emit(SOCKET_ALL_ROOMS, global.getAllEntity());
    //emit all user
  });
   
  

  socket.on(SOCKET_JOIN_ROOM, function (roomName: string) {
    console.log('* join a room : ' + roomName);

    let newRoom : IRoom;
    let user : IUser | undefined = global.getUserWithId(socket.id); //findUser(socket.id);
 
    if (user === undefined) return 0;
      // unsubscribe to room and reset user.room
    if (user.room !== '')
    {
      socket.leave(user.room);
      user.room = ''; // invalid
    }
    if (global.rooms.roomExist(roomName) === false) {
      console.log('ROOM EXIST');
      
      newRoom  = {name : roomName, uuid : roomName, userList : [], state : ERoomState.WAIT_USER, owner : socket.username};
      global.createRoom(newRoom);
      
      io.emit(SOCKET_NEW_ROOM, newRoom); // utile????
    }
    console.log('AFTER');
    
      let currentRoom = global.rooms.getWithName(roomName);

      // add user inside userRoom
      //currentRoom?.userList.push(socket.username);
      global.rooms.addUser(roomName, socket.username);


      let response = {room : currentRoom, err : false, errMsg : ''}
     
      socket.emit(SOCKET_CONFIRM_JOIN_ROOM, response); // ici on envoii la confirmation de la nouvelle room
      io.emit(SOCKET_PATCH_ROOM, response);
      socket.join(roomName);
      user.room = roomName;    
  })

  socket.on(SOCKET_GET_NEXT_TETRIMINOS, () => {
    console.log(' get next tetriminos');

    let tetri = [tetriGenerator.getRandom(), tetriGenerator.getRandom()];
     let roomName = global.rooms.getRoomNameWithUsername(socket.username);
    io.in(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, {tetri : tetri, err : false, errMsg : ''});
  })
 

  socket.on(SOCKET_RUN_GAME, (payload : string) => {
    let currentRoom = global.rooms.getWithName(payload);

    if (currentRoom?.owner !== null &&  currentRoom?.owner !== socket.username)
    {
      console.log('User try to launch a game but is not owner of this room');
      return (0);
    }

    global.rooms.run(payload);
    
    io.emit(SOCKET_UPDATE_ROOM, {
      room : global.rooms.getWithName(payload)?.getInfo(),
      error : false,
      errorMsg : '' 
    });

   let tetri = [tetriGenerator.getRandom(), tetriGenerator.getRandom()];
   let roomName = global.rooms.getRoomNameWithUsername(socket.username);
    io.in(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, {tetri : tetri, err : false, errMsg : ''});
  })

  socket.on(SOCKET_UPDATE_USER_TETRI_BOARD, (saveTetriBoard : number[][]) => {
    console.log(SOCKET_UPDATE_USER_TETRI_BOARD);
    
    console.log(saveTetriBoard);
    
    let updateTetriBoard = global.setSaveTetriBoard(socket.username, saveTetriBoard);
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

   // io.in(roomName).broadcast.emit(SOCKET_PATCH_USER, udpateTetriBoard);
    socket.broadcast.to(roomName).emit(SOCKET_PATCH_USER, updateTetriBoard);
  })
});

const server = http.listen(4242, function () {
  console.log("listening on *:4242");
});