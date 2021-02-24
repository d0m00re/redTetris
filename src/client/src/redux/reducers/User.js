import {
    SET_USERNAME_FORM,
    SET_USERNAME,
    SET_ROOMNAME_FORM,
    SET_IS_CONNECT,
    SET_ROOM
} from '../Constant/User';

const initState = {
    usernameForm: '',
    roomnameForm: '',

    username: '',
    isConnect: false,
    room : null
}

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERNAME_FORM:
            return {
                ...state,
                usernameForm: action.payload
            }

        case SET_ROOMNAME_FORM:
            return {
                ...state,
                roomnameForm: action.payload
            }

        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }

        case SET_IS_CONNECT:
            return {
                ...state,
                isConnect: action.payload
            }

        case SET_ROOM:            
            console.log('SET ROOM');
            
            //return (state.room.name === action.payload.name) ?
            return (action.payload.userList.findIndex(user => user === state.username) !== -1) ?
            {
                ...state,
                room: action.payload
            } : state


        default:
            return state
    }
}

export default UserReducer;