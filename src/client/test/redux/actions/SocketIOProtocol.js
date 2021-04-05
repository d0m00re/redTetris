import * as actions from './../../../src/redux/actions/SocketIOProtocol';
import * as types from './../../../src/redux/Constant/SocketIOProtocol';

const assert = require('assert');

describe('Actions : SocketIoProtocol', () => {
    it('socketuserDead', () => {
        const expectedAction = {
            type: types.SOCKET_USER_DEAD,
        };

        assert.deepEqual(expectedAction, actions.socketUserDead());
    });

    it('socketGetNextTetriminos', () => {
        const expectedAction = {
            type: types.SOCKET_GET_NEXT_TETRIMINOS
        };

        assert.deepEqual(expectedAction, actions.socketGetNextTetriminos());
    });

    it('socketUpdateUserTetriBoard', () => {
        const expectedAction = {
            type: types.SOCKET_UPDATE_USER_TETRI_BOARD
        };

        assert.deepEqual(expectedAction, actions.socketUpdateUserTetriBoard());
    });

    it('socketNbLineDelete', () => {
        const nb = 2;

        const expectedAction = {
            type: types.SOCKET_LINE_DELETE,
            payload: { nbLineDelete: nb }
        };

        assert.deepEqual(expectedAction, actions.socketNbLineDelete(nb));
    });

    it('socketJoindRoom', () => {
        const expectedAction = {
            type: types.SOCKET_JOIN_ROOM
        };

        assert.deepEqual(expectedAction, actions.socketJoinRoom())
    });

    it('socketSendUsername', () => {
        const expectedAction = {
            type: types.SOCKET_SEND_USERNAME
        };

        assert.deepEqual(expectedAction, actions.socketSendUsername());
    });

    it('socketJoinRoomWtName', () => {
        const roomname = 'room1';

        const expectedAction = {
            type: types.SOCKET_JOIN_ROOM_WT_NAME,
            payload: { roomname: roomname }
        };

        assert.deepEqual(expectedAction, actions.socketJoinRoomWtName(roomname));
    });

    it('socketRunGame', () => {
        const expectedAction = {
            type: types.SOCKET_RUN_GAME
        };

        assert.deepEqual(expectedAction, actions.socketRunGame());
    });

    it('socketLeaveRoom', () => {
        const expectedAction = {
            type: types.SOCKET_LEAVE_ROOM
        };

        assert.deepEqual(expectedAction, actions.socketLeaveRoom());
    });

    it('socketPlayGame', () => {
        const expectedAction = {
            type: types.SOCKET_PLAY_AGAIN
        };

        assert.deepEqual(expectedAction, actions.socketPlayAgain());
    });


});