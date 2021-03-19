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

const userRegister = (io : any, socket : any, global : Global, username : string) => {
    socket.username = username;
    let user: IUser = { name: username, uuid: socket.id, room: '' };

    if (username === '' || username === undefined) {
        socket.emit('SOCKET_ERROR', {msg : 'Invalid username'});
        return (false);
    }
    if (global.users.findIndexWtUsername(username) !== -1)
    {
        socket.emit('SOCKET_ERROR', {msg : 'Username already exist'});
        return (false);
    }

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