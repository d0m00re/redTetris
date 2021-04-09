
import {
    SOCKET_USER_DEAD,
    SOCKET_SEND_USERNAME,
    SOCKET_JOIN_ROOM,
    SOCKET_GET_NEXT_TETRIMINOS,
    SOCKET_RUN_GAME,
    SOCKET_JOIN_ROOM_WT_NAME,
    SOCKET_UPDATE_USER_TETRI_BOARD,
    SOCKET_LEAVE_ROOM,
    SOCKET_PLAY_AGAIN,
    SOCKET_LINE_DELETE,
    SOCKET_SEND_USERNAME_WT_USERNAME
} from './../Constant/SocketIOProtocol';

import * as socketIOLogic from './socketIOFunc';

const socketIoMiddleware = ({ getState }) => {
    return (next) => (action) => {
        let { type, payload } = action;
        let state = getState();

        let socket = state.generalSocketInfo.socket;

        switch (type) {
            case SOCKET_SEND_USERNAME:
                socketIOLogic.socketSendUsername(socket, state.user.usernameForm);
                break;

            case SOCKET_SEND_USERNAME_WT_USERNAME:
                socketIOLogic.socketSendUsername(socket, payload);

                break;
            case SOCKET_JOIN_ROOM:
                socketIOLogic.socketJoinRoom(socket, state.user.roomnameForm);

                break;
            case SOCKET_JOIN_ROOM_WT_NAME:
                socketIOLogic.socketJoinRoom(socket, payload.roomname);

                break;
            case SOCKET_GET_NEXT_TETRIMINOS:
                socketIOLogic.socketGetNextTetriminos(socket);
                break;
            case SOCKET_RUN_GAME:
                socketIOLogic.socketRunGame(socket, state.gameRoom.name);

                break;
            case SOCKET_USER_DEAD:
                socketIOLogic.socketUserDead(socket);
                break;
            case SOCKET_UPDATE_USER_TETRI_BOARD:
                socketIOLogic.socketUpdateTetriBoard(socket, state.game.currMap);

                break;
            case SOCKET_LEAVE_ROOM:
                socketIOLogic.socketLeaveRoom(socket);
                break;
            case SOCKET_PLAY_AGAIN:
                socketIOLogic.socketPlayAgain(socket);
                break;
            case SOCKET_LINE_DELETE:
                socketIOLogic.socketLineDelete(socket, payload.nbLineDelete);
                break;
            default:
                break;
        }

        return next(action);
    }
}

export default socketIoMiddleware;