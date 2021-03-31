import {
    SET_GAME_ROOM,
    GAME_ROOM_RESET,
    GAME_ROOM_INIT_STATE,

    GAME_ROOM_UPD_SHADOW,
    GAME_ROOM_SHADOW_RESET
} from './../Constant/GameRoom';

export const initialState = { 
    name: '',
    uuid: '',
    userList: [],
    owner: '',
    state: '',
    leaderboard: [],
    shadows : [] 
};

const GameRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_ROOM_INIT_STATE:
            return {
                ...initialState
            }
        case SET_GAME_ROOM:
            return {
                ...state,
                ...action.payload
            }

        case GAME_ROOM_RESET:
            return {
                ...state,
                state : 'WAIT_USER',
                leaderboard : []
            }

        case GAME_ROOM_UPD_SHADOW:
            return {
                ...state,
                shadows : action.payload
            }

        case GAME_ROOM_SHADOW_RESET:
            return {
                ...state,
                shadows : []
            }

        default:
            return state;
    }
}


export default GameRoomReducer; 