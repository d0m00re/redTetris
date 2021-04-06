import {
    SOCKET_PLAY_AGAIN
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
    }

    if (user !== undefined) {
        user.reset();
    }
    io.emit(SOCKET_PLAY_AGAIN, {roomName : roomName, username : user?.name});
 //   io.to(roomName).emit(SOCKET_PLAY_AGAIN, {roomName : roomName, username : user?.name});

}

export default playAgain; 