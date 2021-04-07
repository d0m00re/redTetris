import * as actions from '../../../src/redux/actions/Game';
import * as types from '../../../src/redux/Constant/Game';

describe('Actions : Game', () => {
    test('incrmentation about line block for our current player.', () => {
        let nbLineBlock = 3;

        const expectedAction = {
            type : types.INCR_NB_LINE_BLOCK,
            payload : nbLineBlock
        };

        expect(actions.incrNbLineBlock(nbLineBlock)).toEqual(expectedAction);
    });

    test('game reset', () => {
        const expectedAction = {
            type : types.GAME_RESET
        }

        expect(actions.gameReset()).toEqual(expectedAction);
    });

    test('game init state', () => {
        const expectedAction = {
            type : types.GAME_INIT_STATE
        }

        expect(actions.gameInitState()).toEqual(expectedAction);

    });

    test('Add tetriminos', () => {
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

        expect(actions.addTetri({tetri :twoTetri})).toEqual(expectedAction);
    });

    test('Reset tetriminos data board', () => {
        const expectedAction = {
            type : types.GAME_RESET_CURRMAP
        }

        expect(actions.resetCurrentMap(0)).toEqual(expectedAction)
    });

    test('Incr your score', () => {
        const nb = 3;

        const expectedAction = {
            type : types.GAME_INCR_SCORE,
            payload : nb
        }

        expect(actions.gameIncrScore(nb)).toEqual(expectedAction);
    });
    
    test('End of a game turn', () => {
        const expectedAction = {
            type : types.END_TURN_PUT,
            payload : Array(20).fill().map(() => Array(10).fill(0))
        };

        expect(actions.endTurnPut(Array(20).fill().map(() => Array(10).fill(0)))).toEqual(expectedAction);
    });

    test('Shape rotation', () => {
        let rot = 2;

        const expectedAction = {
            type : types.TETRI_ROTATION,
            payload : rot
        };

        expect(actions.tetriRotation(rot)).toEqual(expectedAction);
    });

    test('Shape board pos update', () => {
        let pos = {x : 5, y : 10};

        const expectedAction = {
            type : types.UPDATE_TETRIMINOS_POS,
            payload : {x : 5, y : 10}
        };

        expect(actions.updateTetriminosPos(pos)).toEqual(expectedAction);
    });
})