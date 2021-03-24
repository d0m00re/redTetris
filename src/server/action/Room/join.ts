import {
    SOCKET_PATCH_ROOM,
    SOCKET_NEW_ROOM,

} from './../../constant/socket';

import {
  MAX_USER_BY_ROOM
} from './../../constant/config';

import {
    Global
} from '../../entity/Global';

import {
    IRoom, ERoomState
} from '../../entity/Room';

import {
    IUser
} from './../../entity/User';



const join = (io : any, socket : any, global : Global, roomName: string) => {
    let newRoom : IRoom;
    let user : IUser | undefined = global.getUserWithId(socket.id); //findUser(socket.id);
 
    let currRoom = global.rooms.getRoomWithRoomName(roomName);

    if ((currRoom !== undefined && currRoom.userList.length >= MAX_USER_BY_ROOM) || (currRoom !== undefined && currRoom.state !== ERoomState.WAIT_USER))
    {
      return (0);
    }
    if (user === undefined) {
      socket.emit('SOCKET_ERROR', {msg : 'User not found'});
      return (0);
    }

    //if (global.rooms.roomExist(e)

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
     
      socket.join(roomName);
      user.room = roomName;  

//      socket.in(roomName).emit(SOCKET_CONFIRM_JOIN_ROOM, response); // ici on envoii la confirmation de la nouvelle room
      io.emit(SOCKET_PATCH_ROOM, response); // update user room
  
}

export default join;