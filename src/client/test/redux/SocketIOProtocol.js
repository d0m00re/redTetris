import * as actions from './../../src/redux/actions/SocketIOProtocol';
import * as types from './../../src/redux/Constant/SocketIOProtocol';

const assert = require('assert');

describe('Actions : SocketIoProtocol', () => {
    it('send user dead to the server', () => {
        const expectedAction = {
            type: types.SOCKET_USER_DEAD,
        };

        assert.deepEqual(expectedAction, actions.socketUserDead());
    });

    it('Ask new tetriminos', () => {
        const expectedAction = {
            type: types.SOCKET_GET_NEXT_TETRIMINOS
        };

        assert.deepEqual(expectedAction, actions.socketGetNextTetriminos());
    });

    it('Update user game tetri board', () => {
        const expectedAction = {
            type : types.SOCKET_UPDATE_USER_TETRI_BOARD
        };

        assert.deepEqual(expectedAction, actions.socketUpdateUserTetriBoard());
    });

    it ('Send nb line delete to the server', () => {
        const nb = 2;

        const expectedAction = {
            type : types.SOCKET_LINE_DELETE,
            payload : {nbLineDelete : nb}
        };

        assert.deepEqual(expectedAction, actions.socketNbLineDelete(nb));
    })



});