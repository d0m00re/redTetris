// src/server.ts
import express from "express";
import socketio from "socket.io";
import path from "path";
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

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
  socket.on(SOCKET_SEND_USERNAME, function (username: string) {
    socket.username = username;
    let user: IUser = { name: username, uuid: socket.id, room: '' };
    global.users.addUser(user);
    // send back username :
    socket.emit(SOCKET_RECV_USERNAME, {username : user.name,
                                   error : false,
                                   errorMsg : ''});
    // emit all room    
    io.emit(SOCKET_ALL_ROOMS, global.rooms.gets());
    //emit all user
  });
  

  socket.on(SOCKET_JOIN_ROOM, function (roomName: string) {
    console.log('* join a room : ' + roomName);
    
    let user : IUser | undefined = global.users.getWithId(socket.id); //findUser(socket.id);
 
    if (user === undefined)
      return 0;
      // unsubscribe to room and reset user.room
    if (user.room !== '')
    {
      socket.leave(user.room);
      user.room = '';
    }
    let newRoom = null;
    if (global.rooms.roomExist(roomName) === false){
      newRoom = {name : roomName, uuid : roomName, userList : [], msgList : [], state : ERoomState.WAIT_USER, owner : user};
      global.rooms.addRoom(newRoom);
      io.emit(SOCKET_NEW_ROOM, newRoom); // utile????
    }
      let currentRoom = global.rooms.getWithName(roomName);

      // add user inside userRoom
      currentRoom?.userList.push(user.name);

      let response = {room : currentRoom, err : false, errMsg : ''}
     
      socket.emit(SOCKET_CONFIRM_JOIN_ROOM, response); // ici on envoii la confirmation de la nouvelle room
      socket.join(roomName);
      user.room = roomName;
      //new room
    // send all message history
  //  socket.emit('recvMultiplesMessages', global.rooms.find(room => room.name === roomName)?.msgList);
    
  })

  socket.on(SOCKET_GET_NEXT_TETRIMINOS, () => {
    console.log(' get next tetriminos');

    let tetri = [tetriGenerator.getRandom(), tetriGenerator.getRandom()];

    console.log('----OOOOOOOOOOOOOOOOOOOO--');
    console.log(tetri);
    
    
    
     let roomName = global.rooms.getRoomNameWithUsername(socket.username);
     console.log('-------> ' + roomName);
     

  //    socket.emit(SOCKET_GET_NEXT_TETRIMINOS, {tetri : tetri, err : false, errMsg : ''});
  
    io.in(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, {tetri : tetri, err : false, errMsg : ''});
  })
 

  socket.on(SOCKET_RUN_GAME, (payload : string) => {
    console.log('run game : ' + payload);
    global.rooms.run(payload);

    console.log('|||| ------------');
    console.log(global.rooms.getWithName(payload));
    
    
    io.emit(SOCKET_UPDATE_ROOM, {
      room : global.rooms.getWithName(payload),
      error : false,
      errorMsg : '' 
    });

    {/*}
    console.log('SEND TETRIMINOS');
    console.log({
      tetri : tetriGenerator.getRandom(),
      err: false,
      errorMsg: ''
    });
  */}
    

    socket.emit(SOCKET_SEND_TETRIMINOS,  {
      tetri : tetriGenerator.getRandom(),
      err: false,
      errorMsg: ''
    })
  })

});

const server = http.listen(4242, function () {
  console.log("listening on *:4242");
});