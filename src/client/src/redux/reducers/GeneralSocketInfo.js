import * as io from 'socket.io-client';
import {WS_BASE} from './../../config/config';

import {SET_ROOMS, PATCH_LIST_USERS, SET_LIST_USERS, PATCH_LIST_ROOM, DELETE_ROOM, ADD_ROOM} from '../Constant/GeneralSocketInfo';


const initState = {
    socket : io.connect(WS_BASE),
    roomlist : [], 
    userlist : [], 
    room : null,
};

const GeneralSocketInfoReducer = (state = initState, action) => {
    let index = 0;

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
            
            index = state.roomlist.findIndex(room => room.name === newRoom.name);
            
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

        case SET_LIST_USERS:
            return {
                ...state,
                userlist : action.payload
            }

        case PATCH_LIST_USERS:
            let newUser = action.payload;
            let tmpUserList = [];

            index = state.userlist.findIndex(user => user.name === newUser.name);
            

            if (index !== -1){
                tmpUserList = [...state.userlist];
                tmpUserList[index] = newUser;
            }
            else {
                tmpUserList = [...state.userlist, newUser];
            }
            
            return {
                ...state,
                userlist : tmpUserList
            }
        

        default:
            return state;
    }
};

export default GeneralSocketInfoReducer; 