import * as actions from './../../src/redux/actions/Game';
import * as types from './../../src/redux/Constant/Game';

const assert = require('assert');

describe('Game Actions', () => {
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
    })
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