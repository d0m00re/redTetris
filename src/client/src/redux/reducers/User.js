import {
    SET_USERNAME_FORM,
    SET_USERNAME,
    SET_ROOMNAME_FORM,
    SET_ROOM,
    SET_IS_CONNECT
} from '../Constant/User';

const initState = {
    usernameForm: '',
    roomnameForm: '',

    username: '',
    room: null,
    isConnect: false, 
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

        case SET_ROOM:
            console.log(action.payload);
            
            return {
                ...state,
                room: action.payload
            }

        case SET_IS_CONNECT:
            return {
                ...state,
                isConnect: action.payload
            }

        default:
            return state
    }
}

export default UserReducer;