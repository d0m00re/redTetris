import {
    Global
} from '../../entity/Global';

import {
    SOCKET_LINE_DELETE
} from '../../constant/socket';

//var persons: { [id: string] : IPerson; } = {};


const lineDelete = (io : any, socket : any, global : Global, nbLineDelete: number) => {
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

    global.rooms.incrUserScore(roomName, socket.username, nbLineDelete);

    socket.broadcast.to(roomName).emit(SOCKET_LINE_DELETE, nbLineDelete);
}

export default lineDelete;