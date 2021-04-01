import { SET_IS_CONNECT } from './../Constant/User';

export const setIsConnected = () => {
    return {
        type : SET_IS_CONNECT,
        payload : true
    }
}