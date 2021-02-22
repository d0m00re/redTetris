 
import {SOCKET_SEND_USERNAME, SOCKET_JOIN_ROOM, SOCKET_GET_NEXT_TETRIMINOS, SOCKET_RUN_GAME, SOCKET_JOIN_ROOM_WT_NAME} from './../Constant/SocketIOProtocol';

const socketIoMiddleware = ({ getState }) => {
    return (next) => (action) => {
        let { type, payload } = action;
        let state = getState();
        
        let socket = state.generalSocketInfo.socket;

        // set username
        const socketSendUsername = () => {
            console.log('Socket send username : ' + state.user.usernameForm);
            socket.emit(SOCKET_SEND_USERNAME, state.user.usernameForm);
        }

        // join room
        const socketJoinRoom = () => {
            console.log('Socket join room : ' + state.user.roomnameForm);
            socket.emit(SOCKET_JOIN_ROOM, state.user.roomnameForm);
        }

        const socketJoinRoomWtName = (roomname) => {
            socket.emit(SOCKET_JOIN_ROOM, roomname);
        }

        //run game
        const socketRunGame = () => {
            console.log('Socket run game : room --> ' +  state.user.room.name);
            socket.emit(SOCKET_RUN_GAME, state.user.room.name);
        }        

        switch(type) {
            case SOCKET_SEND_USERNAME:
                console.log('SOCKET SEND USERNAME');
                socketSendUsername();
            break;
            case SOCKET_JOIN_ROOM:
                console.log('SOCKET_JOIN_ROOM');  
                socketJoinRoom();
            break;
            case SOCKET_JOIN_ROOM_WT_NAME:
                console.log('SOCKET JOIN ROOM WITH NAME');
                socketJoinRoomWtName(payload.roomname);
            break;
            case SOCKET_GET_NEXT_TETRIMINOS:
                console.log('socket get next tetriminos')
                socket.emit(SOCKET_GET_NEXT_TETRIMINOS);
            break;
            case SOCKET_RUN_GAME:
                console.log('socket run game');
                socketRunGame();
            break;
            default: 
                console.log('NO SOCKET ACTION')
        }

        return next(action);
    }
}

export default socketIoMiddleware;