import * as io from 'socket.io-client';
import {WS_BASE} from './../../config/config';

import {SET_ROOMS, PATCH_ROOM, DELETE_ROOM, ADD_ROOM} from '../Constant/GeneralSocketInfo';


const initState = {
    socket : io.connect(WS_BASE),
    roomlist : [],
    userlist : [],
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
        /*
        case PATCH_ROOM:
            let tmpRoomList = [...state.roomlist];
            let tmp = tmpRoomList.filter(room => room.name === action.payload.room.name)[0]
        
            if (tmp === undefined)
                return state;
            tmp = action.payload.room;
            return {
                ...state,
                roomlidt
            }
            */
        default:
            return state;
    }
};

export default GeneralSocketInfoReducer; 