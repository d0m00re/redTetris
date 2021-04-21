import leaveRoom from './../Room/leave';

import {
    SOCKET_USER_LOGOUT
} from './../../constant/socket';

import {
    Global
} from '../../entity/Global';

const logout = (io : any, socket : any, global : Global) => {
    if (socket.username === undefined) {
        console.log('User don t exist');
return 0;    }

    leaveRoom(io, socket, global);

    let username = socket.username;

    global.users.delete(username);

    io.emit(SOCKET_USER_LOGOUT, username);
}

export default logout;