import * as types from './../Constant/SocketIOProtocol';

export const socketUserDead = () => ({
    type : types.SOCKET_USER_DEAD
});

export const socketGetNextTetriminos = () => ({type : types.SOCKET_GET_NEXT_TETRIMINOS});

export const socketUpdateUserTetriBoard = () => ({
    type : types.SOCKET_UPDATE_USER_TETRI_BOARD
});

export const socketNbLineDelete = (nbLineDelete) => ({
    type : types.SOCKET_LINE_DELETE,
    payload : {nbLineDelete : nbLineDelete}
});

export const socketJoinRoom = () => ({
    type : types.SOCKET_JOIN_ROOM
});

export const socketSendUsername = () => ({
    type : types.SOCKET_SEND_USERNAME
});
 
export const socketSendUsernameWtUsername = (username) => ({
    type : types.SOCKET_SEND_USERNAME_WT_USERNAME,
    payload : username
})

export const socketJoinRoomWtName = (roomname) => ({
    type : types.SOCKET_JOIN_ROOM_WT_NAME,
    payload : {roomname : roomname}
});

export const socketRunGame = () => ({
    type : types.SOCKET_RUN_GAME
});

//=-----------------------------------
export const socketLeaveRoom = () => ({type : types.SOCKET_LEAVE_ROOM});
export const socketPlayAgain = () => ({type : types.SOCKET_PLAY_AGAIN});  