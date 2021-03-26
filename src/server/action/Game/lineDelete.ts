import {
    Global
} from '../../entity/Global';

import {
    SOCKET_LINE_DELETE
} from '../../constant/socket';

const lineDelete = (io : any, socket : any, global : Global, nbLineDelete: number) => {
    console.log(SOCKET_LINE_DELETE + ' : ' + nbLineDelete);

    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

    socket.broadcast.to(roomName).emit(SOCKET_LINE_DELETE, nbLineDelete);   
}

export default lineDelete;