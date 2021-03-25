import {
    SET_GAME_ROOM,
    GAME_ROOM_RESET,
    GAME_ROOM_INIT_STATE
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

        default:
            return state;
    }
}


export default GameRoomReducer; 