import * as types from './../Constant/Game';

export const updateFinalMap = payload => ({
    type : types.UPDATE_FINAL_MAP,
    payload
})

export const updateTetriminosPos  = payload => ({
    type : types.UPDATE_TETRIMINOS_POS,
    payload
})

export const tetriRotation = payload => ({
    type : types.TETRI_ROTATION,
    payload
})

export const updateUsername = payload => ({
    type : types.UPDATE_USERNAME,
    payload
})

export const updateRoom = payload => ({
    type : types.UPDATE_ROOM,
    payload
});

export const incrNbLineBlock = (payload) => ({
    type : types.INCR_NB_LINE_BLOCK,
    payload : payload
})

export const gameReset = () => ({
    type : types.GAME_RESET
});

export const gameInitState = () => ({
    type : types.GAME_INIT_STATE
});

export const addTetri = (payload) => ({
    type : types.ADD_TETRI,
    payload : payload.tetri
})

export const resetCurrentMap = () => ({
    type : types.GAME_RESET_CURRMAP
})

//----
export const gameIncrScore = (nbLineDelete) => ({
    type : types.GAME_INCR_SCORE,
    payload : nbLineDelete
});

export const endTurnPut = (newMap) => ({
    type : types.END_TURN_PUT,
    payload : newMap
})