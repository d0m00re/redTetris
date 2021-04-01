 import * as types from './../Constant/GameRoom';

 /*
export const updateFinalMap = payload => ({
    type : types.UPDATE_FINAL_MAP,
    payload
})
 */

export const setGameRoom = (payload) => ({
    type : types.SET_GAME_ROOM,
    payload : payload
});

export const gameRoomReset = () => ({
    type : types.GAME_ROOM_RESET
});

export const gameRoomUpdateShadow = (payload) => ({
    type : types.GAME_ROOM_UPD_SHADOW, payload : payload.shadows
});

export const setInitState = () => ({
    type : types.GAME_ROOM_INIT_STATE
});