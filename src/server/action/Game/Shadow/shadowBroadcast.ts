import { Global } from "../../../entity/Global";

import { SOCKET_PATCH_USER } from './../../../constant/socket';

/*
const shadowBroadcast = (io : any, socket : any, global : Global, saveTetriBoard: number[][]) => {
    let updateTetriBoard = global.setSaveTetriBoard(socket.username, saveTetriBoard);
    let roomName = global.rooms.getRoomNameWithUsername(socket.username);

    // io.in(roomName).broadcast.emit(SOCKET_PATCH_USER, udpateTetriBoard);
    socket.broadcast.to(roomName).emit(SOCKET_PATCH_USER, updateTetriBoard);
}
*/

// save other user shadow
const shadowBroadcast = (io : any, socket : any, global : Global, saveTetriBoard: number[][]) => {
    global.setSaveTetriBoard(socket.username, saveTetriBoard);
}

export default shadowBroadcast;