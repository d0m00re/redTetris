import {
    SOCKET_PATCH_ROOM,
    SOCKET_PATCH_USER,
    SOCKET_RESET_ROOM
} from './../../constant/socket';

import {
    Global
} from '../../entity/Global';

const playAgain = (io : any, socket : any, global : Global) => {
    // set all user alive on the room
    // send back room reset
    // 
    let room = global.rooms.getRoomWithUsername(socket.username);
    let user = global.users.getUser(socket.username);
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

    if (room !== undefined) {
        room.restart();
        room.leaderboardReset();
        io.emit(SOCKET_PATCH_ROOM, { room: room.getInfo() });
    }

    if (user !== undefined) {
        user.reset();
        io.emit(SOCKET_PATCH_USER, user.getInfo());
    }

    io.in(roomName).emit(SOCKET_RESET_ROOM);
}

export default playAgain;