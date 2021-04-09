import * as actions from './../../../src/redux/actions/Game';
import reducer, { initialState } from './../../../src/redux/reducers/Game';

describe('Game reducer', () => {
    test('should return the initial state', () => {
        let expectedValue = initialState;

        expect(reducer(undefined, {})).toEqual(expectedValue);
    });

    /*
test('should handle SET_USERNAME_FORM', () => {
        let expectedValue = {...initialState, usernameForm : 'user1'};

        expect(reducer(undefined, actions.setUsernameForm('user1'))).toEqual(expectedValue);
    });
    */
    /*
    test('should handle', () => {
     let expectedValue = {...initialState};
 
     expect(reducer(undefined, actions)).toEqual(expectedValue);
    });
    */

    test('should handle GAME_INCR_SCORE', () => {
        let expectedValue = { ...initialState, score: 100 };

        expect(reducer(undefined, actions.gameIncrScore(1))).toEqual(expectedValue);
    });

    test('should handle GAME_INIT_STATE', () => {
        let expectedValue = { ...initialState };

        expect(reducer(undefined, actions.gameInitState())).toEqual(expectedValue);
    });

    test('should handle GAME_RESET', () => {
        let expectedValue = { ...initialState };

        expect(reducer(undefined, actions.gameReset())).toEqual(expectedValue);
    });

    test('should handle UPDATE_FINAL_MAP', () => {
        let board = Array(20).fill().map(() => Array(10).fill(1));
        let expectedValue = { ...initialState, currMap: board };

        expect(reducer(undefined, actions.updateFinalMap(board))).toEqual(expectedValue);
    });

    test('should handle UPDATE_TETRIMINOS_POS', () => {
        let expectedValue = { ...initialState, posTetriminos: { x: 5, y: 5 } };

        expect(reducer(undefined, actions.updateTetriminosPos({ x: 5, y: 5 }))).toEqual(expectedValue);
    });

    test('should handle TETRI_ROTATION', () => {
        let expectedValue = { ...initialState, currRotation: 2 };

        expect(reducer(undefined, actions.tetriRotation(2))).toEqual(expectedValue);
    });

    test('should handle UPDATE_ROOM', () => {
        let expectedValue = { ...initialState, roomname: '#room1' };

        expect(reducer(undefined, actions.updateRoom('#room1'))).toEqual(expectedValue);
    });

    test('should handle INCR_NB_LINE_BLOCK', () => {
        let expectedValue = { ...initialState, nbLineBlock: 2 };

        expect(reducer(undefined, actions.incrNbLineBlock(2))).toEqual(expectedValue);
    });

    test('should handle ADD_TETRI', () => {
        let expectedValue = { ...initialState, tetriList: [[1, 1, 1, 1]] };

        expect(reducer(undefined, actions.addTetri({tetri : [[1, 1, 1, 1]]}))).toEqual(expectedValue);
    });

    test('should handle GAME_RESET_CURRMAP', () => {
        let expectedValue = {
            username: 'user1',
            roomname: 'room1',
            currRotation: 0,

            posTetriminos: { x: 3, y: -1 },
            currMap: Array(20).fill().map(() => Array(10).fill(0)),
            tetriList: [],
            nbLineBlock: 0, // blok line - multiplayer
            score: 0,
        }; 

        let initialStoreState = {
            username: 'user1',
            roomname: 'room1',
            currRotation: 2,

            posTetriminos: { x: 5, y: 2 },
            currMap: Array(20).fill().map(() => Array(10).fill(1)),
            tetriList: [[1,1,1,1], [2,2,2,2]],
            nbLineBlock: 10, // blok line - multiplayer
            score: 1000,
        };

        let state = reducer(initialStoreState, actions.resetCurrentMap());

        expect(state).toEqual(expectedValue);
    });

    test('should handle END_TURN_PUT', () => {
        let expectedValue = {
            username: 'user1',
            roomname: 'room1',
            currRotation: 0,

            posTetriminos: { x: 3, y: -1 },
            currMap: Array(20).fill().map(() => Array(10).fill(1)),
            tetriList: [[[2,2,2,2]]],
            nbLineBlock : 0,
            score: 1000,
        }; 

        let initialStoreState = {
            username: 'user1',
            roomname: 'room1',
            currRotation: 2,

            posTetriminos: { x: 5, y: 2 },
            currMap: Array(20).fill().map(() => Array(10).fill(0)),
            tetriList: [
                [[1,1,1,1]],
                [[2,2,2,2]]
            ],
            nbLineBlock : 0,
            score: 1000,
        };

        let state = reducer(initialStoreState,
                            actions.endTurnPut({
                                newMap : Array(20).fill().map(() => Array(10).fill(1)),
                            }));

        expect(state).toEqual(expectedValue);
    });

});