import * as io from 'socket.io-client';
import {WS_BASE} from './../../config/config';
import _ from 'lodash'; //cloneDeep

import {SET_ROOMS,
    PATCH_LIST_USERS,
    SET_LIST_USERS,
    PATCH_LIST_ROOM,
    DELETE_ROOM,
    ADD_ROOM,
    PATCH_USER,
    DELETE_USER_FROM_USERLIST,
    RESET_ROOM_AND_USER} from '../Constant/GeneralSocketInfo';


export const initialState = {
    socket : io.connect(WS_BASE),
    roomlist : [], 
    userlist : [], 
    room : null,
};

const GeneralSocketInfoReducer = (state = initialState, action) => {
    let index = 0;
    let newUser = undefined;
    let tmpUserList = [];

    switch(action.type) {
        case RESET_ROOM_AND_USER:
            let {roomName} = action.payload;
            let id = state.roomlist.findIndex(_room => _room.name === roomName);
            let cpRoomList = _.cloneDeep(state.roomlist);
            let cpUserList = _.cloneDeep(state.userlist);

            cpRoomList[id] = {
                ...cpRoomList[id],
                leaderboard : [], 
                state : 'WAIT_USER'
            }

            cpUserList = cpUserList.map(_user =>
                (cpRoomList[id].userList.includes(name => name === _user.name)) ?
                    {..._user, alive : true, saveTetriBoard : Array(20).fill([]).map(() => Array(10).fill(0))} : _user
            );

            return {
                ...state,
                roomlist : cpRoomList,
                userlist : cpUserList
            }
        case ADD_ROOM:
            return {
                ...state,
                roomlist : [...state.roomlist, action.payload]
            };

        case DELETE_USER_FROM_USERLIST:
            let newUserList = state.userlist.filter(_user => _user?.name !== action.payload);
            
            return {
                ...state,
                userlist : newUserList
            };
        
        case SET_ROOMS:             
            return {
                ...state,
                roomlist : action.payload
            };
        case DELETE_ROOM:            
            let tmpRoomList = state.roomlist.filter(room => room.name !== action.payload);
            return {
                ...state,
                roomlist : tmpRoomList 
            };
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
            };

        case SET_LIST_USERS:
            return {
                ...state,
                userlist : action.payload
            }

        case PATCH_LIST_USERS:
            newUser = action.payload;

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
            };

        case PATCH_USER:          
            newUser = action.payload;

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
            };

        default:
            return state;
    }
};

export default GeneralSocketInfoReducer; 