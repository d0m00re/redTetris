 
import {SOCKET_SEND_USERNAME, SOCKET_JOIN_ROOM} from './../Constant/SocketIOProtocol';

const socketIoMiddleware = ({ getState }) => {
    return (next) => (action) => {
        let { type } = action;
        let state = getState();
        
        let socket = state.generalSocketInfo.socket;

        const socketSendUsername = () => {
            console.log('Socket send username : ' + state.user.usernameForm);
            socket.emit(SOCKET_SEND_USERNAME, state.user.usernameForm);
        }

        const socketJoinRoom = () => {
            console.log('Socket join room : ' + state.user.roomnameForm);
            socket.emit(SOCKET_JOIN_ROOM, state.user.roomnameForm);
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
            default: 
                console.log('NO SOCKET ACTION')
        }

        return next(action);
    }
}

export default socketIoMiddleware;