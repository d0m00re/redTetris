import * as actions from '../../../src/redux/actions/SocketIOProtocol';
import * as types from '../../../src/redux/Constant/SocketIOProtocol';

const assert = require('assert');

describe('Actions : SocketIoProtocol', () => {
    test('socketuserDead', () => {
        const expectedAction = {
            type: types.SOCKET_USER_DEAD,
        };

        assert.deepEqual(expectedAction, actions.socketUserDead());
    });

    test('socketGetNextTetriminos', () => {
        const expectedAction = {
            type: types.SOCKET_GET_NEXT_TETRIMINOS
        };

        assert.deepEqual(expectedAction, actions.socketGetNextTetriminos());
    });

    test('socketUpdateUserTetriBoard', () => {
        const expectedAction = {
            type: types.SOCKET_UPDATE_USER_TETRI_BOARD
        };

        assert.deepEqual(expectedAction, actions.socketUpdateUserTetriBoard());
    });

    test('socketNbLineDelete', () => {
        const nb = 2;

        const expectedAction = {
            type: types.SOCKET_LINE_DELETE,
            payload: { nbLineDelete: nb }
        };

        assert.deepEqual(expectedAction, actions.socketNbLineDelete(nb));
    });

    test('socketJoindRoom', () => {
        const expectedAction = {
            type: types.SOCKET_JOIN_ROOM
        };

        assert.deepEqual(expectedAction, actions.socketJoinRoom())
    });

    test('socketSendUsername', () => {
        const expectedAction = {
            type: types.SOCKET_SEND_USERNAME
        };

        assert.deepEqual(expectedAction, actions.socketSendUsername());
    });

    test('socketJoinRoomWtName', () => {
        const roomname = 'room1';

        const expectedAction = {
            type: types.SOCKET_JOIN_ROOM_WT_NAME,
            payload: { roomname: roomname }
        };

        assert.deepEqual(expectedAction, actions.socketJoinRoomWtName(roomname));
    });

    test('socketRunGame', () => {
        const expectedAction = {
            type: types.SOCKET_RUN_GAME
        };

        assert.deepEqual(expectedAction, actions.socketRunGame());
    });

    test('socketLeaveRoom', () => {
        const expectedAction = {
            type: types.SOCKET_LEAVE_ROOM
        };

        assert.deepEqual(expectedAction, actions.socketLeaveRoom());
    });

    test('socketPlayGame', () => {
        const expectedAction = {
            type: types.SOCKET_PLAY_AGAIN
        };

        assert.deepEqual(expectedAction, actions.socketPlayAgain());
    });


});