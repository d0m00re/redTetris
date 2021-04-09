import * as types from './../Constant/SocketIOProtocol';

export const socketSendUsername = (socket, usernameForm) => {
    socket.emit(types.SOCKET_SEND_USERNAME, usernameForm);//state.user.usernameForm);
};

// join room 
export const socketJoinRoom = (socket, roomnameForm) => {
    socket.emit(types.SOCKET_JOIN_ROOM, roomnameForm);//state.user.roomnameForm);
};

//run game
export const socketRunGame = (socket, roomname) => {
    socket.emit(types.SOCKET_RUN_GAME, roomname);//state.gameRoom.name);
};

export const socketGetNextTetriminos = (socket) => {
    socket.emit(types.SOCKET_GET_NEXT_TETRIMINOS);
};

// current user loose the game
export const socketUserDead = (socket) => {
    socket.emit(types.SOCKET_USER_DEAD); 
};

export const socketUpdateTetriBoard = (socket, currMap) => {            
    socket.emit(types.SOCKET_UPDATE_USER_TETRI_BOARD, currMap); //state.game.currMap);
};

export const socketLeaveRoom = (socket) => {
    socket.emit(types.SOCKET_LEAVE_ROOM);
};

export const socketPlayAgain = (socket) => {
    socket.emit(types.SOCKET_PLAY_AGAIN);
};

export const socketLineDelete = (socket, nbLineDelete) => {
    socket.emit(types.SOCKET_LINE_DELETE, nbLineDelete);
};