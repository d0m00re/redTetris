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
            return {
                ...state,
                roomlist : [...state.roomlist, action.payload]
            }
        
        case SET_ROOMS:             
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
                tmpListRoom = [...state.roomlist];
                tmpListRoom[index] = newRoom;
            }
            else {
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