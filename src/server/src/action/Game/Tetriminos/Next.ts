import { TetriminosGenerator } from "../../../entity/TetriminosGenerator";

import {
    SOCKET_GET_NEXT_TETRIMINOS
} from './../../../constant/socket';

import {
    Global
} from '../../../entity/Global';

const NextTetriminos = (io : any, socket : any, global : Global, tetriGenerator : TetriminosGenerator) => {
    let tetri = [tetriGenerator.getRandom(), tetriGenerator.getRandom()];
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);
    io.in(roomName).emit(SOCKET_GET_NEXT_TETRIMINOS, { tetri: tetri, err: false, errMsg: '' });
}

export default NextTetriminos;