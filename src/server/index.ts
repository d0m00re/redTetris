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

export const  SOCKET_LEAVE_ROOM = 'SOCKET_LEAVE_ROOM';

export const SOCKET_DELETE_ROOM = 'SOCKET_DELETE_ROOM';

export const SOCKET_PLAY_AGAIN = 'SOCKET_PLAY_AGAIN';

export const SOCKET_RESET_ROOM = 'SOCKET_RESET_ROOM';

export const SOCKET_LINE_DELETE = 'SOCKET_LINE_DELETE';



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
    origin: "*",
  }
});

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/index.html"));
});

io.on("connection", function (socket: any) {

  socket.on(SOCKET_PLAY_AGAIN, function() {
    // set all user alive on the room
    // send back room reset
    // 
    console.log('PLAY AGAIN');
    let room  = global.rooms.getRoomWithUsername(socket.username);
    let user = global.users.getUser(socket.username);
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

    if (room !== undefined)
    {
      room.restart();
      room.leaderboardReset();
      io.emit(SOCKET_PATCH_ROOM, {room : room.getInfo()});
    }

    if (user !== undefined) {
      user.reset();
      io.emit(SOCKET_PATCH_USER, user.getInfo());
    }

    io.in(roomName).emit(SOCKET_RESET_ROOM);
  });

  socket.on(SOCKET_USER_DEAD, function() {
    console.log('SOCKET USER DEAD');
    
    // update room with user dead server side
    let userUpdate = global.setUserDeadInRoom(socket.username);
  
    // check end game
    // si user solo alors sa mort signifie la fin de la partie
    // sinon la fin de la partie dne se finit que si il reste un seul joueur en vie
    // change game state
    let roomUpdate = global.checkEndGame(socket.username);

    console.log('roomUpdate');
    console.log(roomUpdate);
    
    

    if (roomUpdate !== undefined){  
      io.emit(SOCKET_PATCH_ROOM, {room : roomUpdate});
    }


    // room update - client side
    console.log('user update');
    
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
      newRoom  = {name : roomName, uuid : roomName, userList : [], state : ERoomState.WAIT_USER, owner : socket.username, leaderboard : []};
      global.createRoom(newRoom);
      
      io.emit(SOCKET_NEW_ROOM, newRoom); // utile????
    }    
      let currentRoom = global.rooms.getWithName(roomName);

      // add user inside userRoom
      //currentRoom?.userList.push(socket.username);
      global.rooms.addUser(roomName, socket.username);


      let response = {room : currentRoom, err : false, errMsg : ''}
     
      console.log(SOCKET_CONFIRM_JOIN_ROOM);
      console.log(currentRoom);
     
      socket.join(roomName);
      user.room = roomName;  

//      socket.in(roomName).emit(SOCKET_CONFIRM_JOIN_ROOM, response); // ici on envoii la confirmation de la nouvelle room
      io.emit(SOCKET_PATCH_ROOM, response); // update user room
  
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
    //socket.to(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, {tetri : tetri, err : false, errMsg : ''});
    console.log(SOCKET_GET_NEXT_TETRIMINOS + ' ===> ' + roomName);
    
    io.to(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, {tetri : tetri, err : false, errMsg : ''});
  })

  socket.on(SOCKET_UPDATE_USER_TETRI_BOARD, (saveTetriBoard : number[][]) => {
    //console.log(SOCKET_UPDATE_USER_TETRI_BOARD);
    
    //console.log(saveTetriBoard);
    
    let updateTetriBoard = global.setSaveTetriBoard(socket.username, saveTetriBoard);
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

   // io.in(roomName).broadcast.emit(SOCKET_PATCH_USER, udpateTetriBoard);
    socket.broadcast.to(roomName).emit(SOCKET_PATCH_USER, updateTetriBoard);
  })

  socket.on(SOCKET_LINE_DELETE, (nbLineDelete : number) => {
    console.log(SOCKET_LINE_DELETE);
    console.log(nbLineDelete);
    
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

    socket.broadcast.to(roomName).emit(SOCKET_LINE_DELETE, nbLineDelete);
  })

  socket.on(SOCKET_LEAVE_ROOM, () => {
    console.log(SOCKET_LEAVE_ROOM);
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

    // server side :
    //    unsubscribe user
    socket.leave(roomName);

  //  global.deleteUserInUserlist(socket.username); 

  //true : delete room | false : update the room
    let roomDelete = global.leaveRoom(socket.username);
    //    remove user on a specific room
    //    remove from user list
    //            Si nb user === 1 // delete room
    //            if owner
    //            
    // unsubscribe user
    //update user
    // update room userlist

    // return update room,
    // return update user
    console.log(global.getIRoomWithRoomname(roomName));
    
    let data = {
      room : global.getIRoomWithRoomname(roomName),
      user : global.getIUserWithUsername(socket.username)
    }

    console.log('--> DATA');
    console.log(data);
    

    socket.emit(SOCKET_LEAVE_ROOM); // reset user room tmp store
    // if we update a room
    io.emit(SOCKET_PATCH_ROOM, {room : data.room});

    // if no moore use in it we delete it
    if (roomDelete === true)
      io.emit(SOCKET_DELETE_ROOM, roomName);
    //else
    io.emit(SOCKET_PATCH_USER, {...data.user, room : ''});
  })
});

const server = http.listen(4242, function () {
  console.log("listening on *:4242");
});