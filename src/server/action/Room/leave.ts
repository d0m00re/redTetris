import {
    SOCKET_LEAVE_ROOM,
    SOCKET_PATCH_ROOM,
    SOCKET_DELETE_ROOM,
    SOCKET_PATCH_USER
} from './../../constant/socket';

import {
    Global
} from '../../entity/Global';

const leaveRoom = (io : any, socket : any, global : Global) => {
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
    let data = {
      room : global.getIRoomWithRoomname(roomName),
      user : global.getIUserWithUsername(socket.username)
    }

    socket.emit(SOCKET_LEAVE_ROOM); // reset user room tmp store
    // if we update a room
    io.emit(SOCKET_PATCH_ROOM, {room : data.room});

    // if no moore use in it we delete it
    if (roomDelete === true)
      io.emit(SOCKET_DELETE_ROOM, roomName);
    //else
    io.emit(SOCKET_PATCH_USER, {...data.user, room : ''});
}

export default leaveRoom;