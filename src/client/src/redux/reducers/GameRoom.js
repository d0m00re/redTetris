import {
    SET_GAME_ROOM,
    GAME_ROOM_RESET
} from './../Constant/GameRoom';

export const initialState = { 
    name: '',
    uuid: '',
    userList: [],
    owner: '',
    state: '',
    leaderboard: []
};

const GameRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GAME_ROOM:
            return {
                ...state,
                ...action.payload
            }

        case GAME_ROOM_RESET:
            return {
                ...initialState
            }

        default:
            return state;
    }
}


export default GameRoomReducer; 