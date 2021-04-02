import * as types from './../../redux/Constant/GeneralSocketInfo';

 /*
export const updateFinalMap = payload => ({
    type : types.UPDATE_FINAL_MAP,
    payload
})
 */

export const resetRoomAndUser = (roomname) => ({
        type : types.RESET_ROOM_AND_USER,
        payload : {roomName : roomname}
});

export const deleteUserFromUserlist = (username) => ({
        type : types.DELETE_USER_FROM_USERLIST,
        payload : username
});

export const deleteRoom = (roomname) => ({
        type : types.DELETE_ROOM,
        payload : roomname
});

export const setRooms = (rooms) => ({
    type : types.SET_ROOMS,
    payload : rooms
})

export const setListUsers = (users) => ({
    type : types.SET_LIST_USERS,
    payload : users
})

export const addRoom  = (room) => ({
    type : types.ADD_ROOM,
    payload : room
})

export const patchListRoom = (room) => ({
    type : types.PATCH_LIST_ROOM,
    payload : room.room
})

export const patchUser = (user) => ({
    type : types.PATCH_USER,
    payload : user
})