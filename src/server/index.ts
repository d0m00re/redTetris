// src/server.ts
import express from "express";
import socketio from "socket.io";
import path from "path";
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

import {IUser} from './entity/User';
import {IRoom, ERoomState} from './entity/Room';
import {IGlobal} from './entity/Global';

export const SOCKET_SEND_USERNAME = 'SOCKET_SEND_USERNAME';
export const SOCKET_RECV_USERNAME = 'SOCKET_RECV_USERNAME';
export const SOCKET_JOIN_ROOM = 'SOCKET_JOIN_ROOM';
export const SOCKET_CONFIRM_JOIN_ROOM = 'SOCKET_CONFIRM_JOIN_ROOM';
export const SOCKET_GET_ALL_ROOMS = 'SOCKET_GET_ALL_ROOMS';
export const SOCKET_ALL_ROOMS = 'SOCKET_ALL_ROOM';

export const SOCKET_NEW_ROOM = 'SOCKET_NEW_ROOM';

let global: IGlobal = { users: [], rooms: [] };

// show room user
const showRoomUser = (roomName : string) => {
  const clients = io.sockets.adapter.rooms.get(roomName);
  console.log('room id : ' + clients.id);
  
  //console.log(clients);

  for (const clientId of clients) {

    //this is the socket of each client in the room.
    const clientSocket = io.sockets.sockets.get(clientId);

    //you can do whatever you need with this
    console.log(clientSocket.nickname);

  }
}
// utility function :
// 1 find an user object
const findUser = (id : string) => {
  console.log('id to find : ' + id);
  console.log(global.users.find(user => user.uuid === id));
  console.log('-----------');
  
  
  
  return global.users.find(user => user.uuid === id);
}
// 2 : find room object
const findRoom = (roomname : string) => global.rooms.find(room => room.uuid === roomname);

// 3 : 

// 1)

//--------------------------------------------------------

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

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
// create event connection
io.on("connection", function (socket: any) {
  socket.on(SOCKET_SEND_USERNAME, function (username: string) {
    console.log('* send nickname : ' + username);

    socket.nickname = username;
    let user: IUser = { username: username, uuid: socket.id, room: '' };
    global.users.push(user);
    console.log(global.users);
    // send back username :
    io.emit(SOCKET_RECV_USERNAME, {username : user.username,
                                   error : false,
                                   errorMsg : ''});
    // emit all room
    console.log('all room emit : ');
    
    io.emit(SOCKET_ALL_ROOMS, global.rooms);
    //emit all user
  })

  socket.on(SOCKET_JOIN_ROOM, function (roomName: string) {
    console.log('* join a room : ' + roomName);
    
    let user : IUser | undefined = findUser(socket.id);
    // user need to leave this current room
    if (user === undefined)
    {
      return 0;
    }
      // unsubscribe to room and reset user.room
    if (user.room !== '')
    {
      socket.leave(user.room);
      user.room = '';
    }
    let newRoom = null;
    if (global.rooms.filter(elem => elem.name === roomName).length === 0){
      newRoom = {name : roomName, uuid : roomName, userList : [], state : ERoomState.WAIT_USER, owner : user};
      global.rooms.push(newRoom);
  //    io.emit(SOCKET_NEW_ROOM, newRoom); // utile????
    }
      let currentRoom = global.rooms.filter(room => room.name === roomName)[0];
      let response = {room : currentRoom, err : false, errMsg : ''}
      // go send patch current room
      io.emit(SOCKET_CONFIRM_JOIN_ROOM, response); // ici on envoii la confirmation de la nouvelle room
      socket.join(roomName);
      user.room = roomName;
      //new room
    
    console.log('----========= GENERAL OBJECT ==========-------');
    
    console.log(global);
    // send all message history
  //  socket.emit('recvMultiplesMessages', global.rooms.find(room => room.name === roomName)?.msgList);
    
  })

  /*
  socket.on("sendMessage", function (payload : any) {
    console.log(' go find user omotherfucker : ' + socket.id);    
    
    let user : IUser | undefined = findUser(socket.id);

    if (user === undefined || user.room === '') {
      console.error('user have no room ...');
      return (0);
    }
    */
    //fiind romm with user.room name
   // let msgList = global.rooms.find(room => room.name === user?.room)?.msgList;

   // msgList?.push(payload);
    
   // socket.to(user.room).broadcast.emit('recvMessage', payload);

 // });

  socket.on("getAllRoom", function () {
    console.log(' get all room : ');
    console.log(global.rooms.map(room => room.name));
    
    
    socket.emit("getAllRoom", global.rooms.map(room => room.name));
  })

  // rejoindre une room
});

const server = http.listen(4242, function () {
  console.log("listening on *:4242");
});