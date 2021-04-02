 
import {SOCKET_USER_DEAD,
        SOCKET_SEND_USERNAME, 
        SOCKET_JOIN_ROOM,
        SOCKET_GET_NEXT_TETRIMINOS,
        SOCKET_RUN_GAME,
        SOCKET_JOIN_ROOM_WT_NAME,
        SOCKET_UPDATE_USER_TETRI_BOARD, 
        SOCKET_LEAVE_ROOM,
        SOCKET_PLAY_AGAIN,
        SOCKET_LINE_DELETE
} from './../Constant/SocketIOProtocol';
 
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
            socket.emit(SOCKET_RUN_GAME, state.gameRoom.name);
        }

        const getNextTetriminos = () => {
            socket.emit(SOCKET_GET_NEXT_TETRIMINOS);
        }

        // current user loose the game
        const socketUserDead = () => {
            socket.emit(SOCKET_USER_DEAD); 
        }

        const socketUpdateTetriBoard = () => {
            console.log(SOCKET_UPDATE_USER_TETRI_BOARD);
            console.log(state.game.currMap);
            
            
            socket.emit(SOCKET_UPDATE_USER_TETRI_BOARD, state.game.currMap);
        }

        const socketLeaveRoom = () => {
            console.log(SOCKET_LEAVE_ROOM);
            socket.emit(SOCKET_LEAVE_ROOM);
        }

        const socketPlayAgain = () => {
            console.log(SOCKET_PLAY_AGAIN);
            socket.emit(SOCKET_PLAY_AGAIN);
        }

        const socketLineDelete = (nbLineDelete) => {
            //SOCKET_LINE_DELETE
            console.log(SOCKET_LINE_DELETE);
            socket.emit(SOCKET_LINE_DELETE, nbLineDelete);
            
        }

        switch(type) {
            case SOCKET_SEND_USERNAME:
                socketSendUsername();
            break;
            case SOCKET_JOIN_ROOM:
                console.log(SOCKET_JOIN_ROOM);
                socketJoinRoom();
            break;
            case SOCKET_JOIN_ROOM_WT_NAME:
                console.log(SOCKET_JOIN_ROOM_WT_NAME + '  ==> ' +  payload.roomname);
                socketJoinRoomWtName(payload.roomname);
            break;
            case SOCKET_GET_NEXT_TETRIMINOS:
                getNextTetriminos();
            break;
            case SOCKET_RUN_GAME:
                socketRunGame();
            break;
            case SOCKET_USER_DEAD:
                socketUserDead();
            break;
            case SOCKET_UPDATE_USER_TETRI_BOARD:
                socketUpdateTetriBoard();
            break;
            case SOCKET_LEAVE_ROOM:
                socketLeaveRoom();
            break;
            case SOCKET_PLAY_AGAIN:
                socketPlayAgain();
            break;
            case SOCKET_LINE_DELETE:
                socketLineDelete(payload.nbLineDelete);
            break;
            default: 
            break;
        }

        return next(action);
    }
}

export default socketIoMiddleware;