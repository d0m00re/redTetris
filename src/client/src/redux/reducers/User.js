import {
    SET_USERNAME_FORM,
    SET_USERNAME,
    SET_ROOMNAME_FORM,
    SET_IS_CONNECT,
    SET_USER_ALIVE, 
} from '../Constant/User';

export const initialState = {
    usernameForm: '',
    roomnameForm: '',

    username: '',
    isConnect: false,
    alive : true,
};

const UserReducer = (state = initialState, action) => {
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

        case SET_USER_ALIVE:
            return ({
                ...state,
                alive : action.payload
            });

        default:
            return state
    }
}

export default UserReducer;