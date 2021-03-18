import {
    SOCKET_UPDATE_ROOM,
    SOCKET_GET_NEXT_TETRIMINOS
} from './../../constant/socket';

import {
    Global
} from '../../entity/Global';

import { TetriminosGenerator } from '../../entity/TetriminosGenerator';


const runGame = (io : any, socket : any, global : Global, payload : string, tetriGenerator : TetriminosGenerator) => {
    let currentRoom = global.rooms.getWithName(payload);

    if (currentRoom?.owner !== null && currentRoom?.owner !== socket.username) {
      console.log('User try to launch a game but is not owner of this room');
      return (0);
    }

    global.rooms.run(payload);

    io.emit(SOCKET_UPDATE_ROOM, {
      room: global.rooms.getWithName(payload)?.getInfo(),
      error: false,
      errorMsg: ''
    });

    let tetri = [tetriGenerator.getRandom(), tetriGenerator.getRandom()];
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);
    //socket.to(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, {tetri : tetri, err : false, errMsg : ''});    
    io.to(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, { tetri: tetri, err: false, errMsg: '' });
}

export default runGame;