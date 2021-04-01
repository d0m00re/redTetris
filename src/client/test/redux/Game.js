import * as actions from './../../src/redux/actions/Game';
import * as types from './../../src/redux/Constant/Game';

const assert = require('assert');

describe('Actions : Game', () => {
    it('incrmentation about line block for our current player.', () => {
        let nbLineBlock = 3;

        const expectedAction = {
            type : types.INCR_NB_LINE_BLOCK,
            payload : nbLineBlock
        };

        assert.deepEqual(actions.incrNbLineBlock(nbLineBlock), expectedAction);
    });

    it('game reset', () => {
        const expectedAction = {
            type : types.GAME_RESET
        }

        assert.deepEqual(actions.gameReset(), expectedAction);
    });

    it('game init state', () => {
        const expectedAction = {
            type : types.GAME_INIT_STATE
        }

        assert.deepEqual(actions.gameInitState(), expectedAction);
    });

    it('Add tetriminos', () => {
        const oneTetri = [
            [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],
            [[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],
            [[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],
            [[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]]
        ];

        const twoTetri = [oneTetri, oneTetri];
        
        const expectedAction = {
            type : types.ADD_TETRI,
            payload : twoTetri
        };

        assert.deepEqual(actions.addTetri({tetri :twoTetri}), expectedAction);
    });

    it('Reset tetriminos data board', () => {
        const expectedAction = {
            type : types.GAME_RESET_CURRMAP
        }

        assert.deepEqual(actions.resetCurrentMap(0)  ,expectedAction)
    });

    it('Incr your score', () => {
        const nb = 3;

        const expectedAction = {
            type : types.GAME_INCR_SCORE,
            payload : nb
        }

        assert.deepEqual(actions.gameIncrScore(nb), expectedAction);
    });
    
    it('End of a game turn', () => {
        const expectedAction = {
            type : types.END_TURN_PUT
        };

        assert.deepEqual(actions.endTurnPut(), expectedAction);
    });

    it ('Shape rotation', () => {
        let rot = 2;

        const expectedAction = {
            type : types.TETRI_ROTATION,
            payload : rot
        };

        assert.deepEqual(actions.tetriRotation(rot), expectedAction);
    });

    it ('Shape board pos update', () => {
        let pos = {x : 5, y : 10};

        const expectedAction = {
            type : types.UPDATE_TETRIMINOS_POS,
            payload : {x : 5, y : 10}
        };

        assert.deepEqual(actions.updateTetriminosPos(pos), expectedAction);
    });


/*
    it('Reset tetriminos data board', () => {
        const expectedAction = {
            type :,
            payload ; 
        }

        assert.deepEqual(expectedAction, ..)
    })
    */
})