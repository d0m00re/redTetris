import * as types from './../Constant/SocketIOProtocol';

export const socketUserDead = () => ({
    type : types.SOCKET_USER_DEAD
});

export const socketGetNextTetriminos = () => ({type : types.SOCKET_GET_NEXT_TETRIMINOS});

export const socketUpdateUserTetriBoard = () => ({
    type : types.SOCKET_UPDATE_USER_TETRI_BOARD
})

export const socketNbLineDelete = (nbLineDelete) => ({
    type : types.SOCKET_LINE_DELETE,
    payload : {nbLineDelete : nbLineDelete}
});

export const socketJoinRoom = () => ({
    type : types.SOCKET_JOIN_ROOM
})

export const socketSendUsername = () => ({
    type : types.SOCKET_SEND_USERNAME
})

export const socketJoinRoomWtName = (roomname) => ({
    type : types.SOCKET_JOIN_ROOM_WT_NAME,
    payload : {roomname : roomname}
})

//=-----------------------------------
export const socketRunGame = () => ({type : types.SOCKET_RUN_GAME});
export const socketLeaveRoom = () => ({type : types.SOCKET_LEAVE_ROOM});
export const socketPlayAgain = () => ({type : types.SOCKET_PLAY_AGAIN}); 

export const socketConfirmJoinRoom = () => ({type : types.SOCKET_CONFIRM_JOIN_ROOM});
export const socketAllRooms = () => ({type : types.SOCKET_ALL_ROOMS});
export const socketNewRoom = () => ({type : types.SOCKET_NEW_ROOM});
export const socketDeleteRoom = () => ({type : types.SOCKET_DELETE_ROOM});
export const socketResetRoom = () => ({type : types.SOCKET_RESET_ROOM});

//export const socket = () => ({type : });

export const socketUserLogout = () => ({type : types.SOCKET_USER_LOGOUT});
export const socketRecvUsername = () => ({type : types.SOCKET_RECV_USERNAME});
export const socketPatchUser = () => ({type : types.SOCKET_PATCH_USER});

export const socketLineDelete = () => ({type : types.SOCKET_LINE_DELETE});

export const socketSendTetriminos = () => ({type : types.SOCKET_SEND_TETRIMINOS});
export const socketShadowsRoom = () => ({type : types.SOCKET_SHADOWS_ROOM});
