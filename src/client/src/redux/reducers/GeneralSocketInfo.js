import * as io from 'socket.io-client';
import {WS_BASE} from './../../config/config';

import {SET_ROOMS, PATCH_LIST_ROOM, DELETE_ROOM, ADD_ROOM} from '../Constant/GeneralSocketInfo';


const initState = {
    socket : io.connect(WS_BASE),
    roomlist : [],
    userlist : [],
    room : null,
};

const GeneralSocketInfoReducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_ROOM:
            console.log('========================== add room');
            console.log(state.roomlist);
            console.log(action.payload);
            
            
            return {
                ...state,
                roomlist : [...state.roomlist, action.payload]
            }
        
        case SET_ROOMS:
            console.log('-------------------- set rooms');
             
            return {
                ...state,
                roomlist : action.payload
            }
        case DELETE_ROOM:
            let tmpRoomList = state.roomlist.filter(room => room.name !== action.payload);
            return {
                ...state,
                roomlist : tmpRoomList
            }
        case PATCH_LIST_ROOM:
            let newRoom = action.payload;
            
            let index = state.roomlist.findIndex(room => room.name === newRoom.name);
            
            let tmpListRoom = [];
            if (index !== -1)            
            {
                console.log('ROOM EXIST');
                tmpListRoom = [...state.roomlist];
                tmpListRoom[index] = newRoom;
            }
            else {
                console.log('ROOM DON T EXIST');
                tmpListRoom = [...state.roomlist, newRoom];
            }
            return {
                ...state,
                roomlist : tmpListRoom
            }

        default:
            return state;
    }
};

export default GeneralSocketInfoReducer; 