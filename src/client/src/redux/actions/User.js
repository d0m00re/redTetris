import * as types from './../Constant/User';

export const setIsConnected = () => {
    return {
        type : types.SET_IS_CONNECT,
        payload : true
    }
};
//import {SET_ERROR, SET_USERNAME, SET_IS_CONNECT, SET_ROOMNAME_FORM, SET_USER_ALIVE} from './redux/Constant/User';

export const setError = (payload) => {
    return {
        type : types.SET_ERROR,
        payload : {error : true, errorMsg : payload.errorMsg}
    }
}

export const setUsername = (payload) => {
    return {
        type : types.SET_USERNAME,
        payload : payload.username
    }
};

export const setUsernameForm = (payload) => {
    return {
        type : types.SET_USERNAME_FORM,
        payload : payload
    }
}
/*
export const setRoomname = (payload) => {
    return {
        type : types,
        payload : {}
    }
}
*/

export const setRoomnameForm = (payload) => {
    return {
        type : types.SET_ROOMNAME_FORM,
        payload : payload
    }
};

export const setUserAlive = (payload) => {
    return {
        type : types.SET_USER_ALIVE,
        payload : payload
    }
};

//SET_ERROR, SET_USERNAME, SET_IS_CONNECT, SET_ROOMNAME_FORM, SET_USER_ALIVE