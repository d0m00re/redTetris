import {
    SOCKET_RECV_USERNAME,
    SOCKET_ALL_ROOMS
} from '../../constant/socket';

import {
    IUser
} from '../../entity/User';

import {
    Global
} from '../../entity/Global';

const userRegister = (io : any, socket : any, username : string, global : Global) => {
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
}

export default userRegister;