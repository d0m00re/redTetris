 
import {SOCKET_SEND_USERNAME, SOCKET_JOIN_ROOM, SOCKET_GET_NEXT_TETRIMINOS, SOCKET_RUN_GAME, SOCKET_JOIN_ROOM_WT_NAME} from './../Constant/SocketIOProtocol';

const socketIoMiddleware = ({ getState }) => {
    return (next) => (action) => {
        let { type, payload } = action;
        let state = getState();
        
        let socket = state.generalSocketInfo.socket;

        // set username
        const socketSendUsername = () => {
            socket.emit(SOCKET_SEND_USERNAME, state.user.usernameForm);
        }

        // join room
        const socketJoinRoom = () => {
            socket.emit(SOCKET_JOIN_ROOM, state.user.roomnameForm);
        }

        const socketJoinRoomWtName = (roomname) => {
            socket.emit(SOCKET_JOIN_ROOM, roomname);
        }

        //run game
        const socketRunGame = () => {
            socket.emit(SOCKET_RUN_GAME, state.user.room.name);
        }

        const getNextTetriminos = () => {
            socket.emit(SOCKET_GET_NEXT_TETRIMINOS);
        }

        switch(type) {
            case SOCKET_SEND_USERNAME:
                socketSendUsername();
            break;
            case SOCKET_JOIN_ROOM:
                socketJoinRoom();
            break;
            case SOCKET_JOIN_ROOM_WT_NAME:
                socketJoinRoomWtName(payload.roomname);
            break;
            case SOCKET_GET_NEXT_TETRIMINOS:
                getNextTetriminos();
            break;
            case SOCKET_RUN_GAME:
                socketRunGame();
            break;
            default: 
            break;
        }

        return next(action);
    }
}

export default socketIoMiddleware;