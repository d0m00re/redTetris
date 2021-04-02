import * as types from './../Constant/User';

export const setIsConnected = () => {
    return {
        type : types.SET_IS_CONNECT,
        payload : true
    }
};

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