import * as roomStatus from './../../src/utils/getRoomStatus';

const assert = require('assert');

describe('utils : getRoomStatus', () => {
    it('Invalid data', () => {
        assert.equal(undefined, roomStatus.getStatus('invalid', 55));
    });
    it('Open Loby', () => {
        assert.equal(roomStatus.dicoStatus.WAIT_USER, roomStatus.getStatus('WAIT_USER', 4));
    });
    it('Game running', () => {
        assert.equal(roomStatus.dicoStatus.WAIT_USER, roomStatus.getStatus('WAIT_USER', 7));
    });
    it('Game End', () => {
        assert.equal(roomStatus.dicoStatus.END_GAME, roomStatus.getStatus('END_GAME', 3));
    });
    it('Loby is full', () => {
        assert.equal(roomStatus.dicoStatus.RUNING_GAME, roomStatus.getStatus('RUNING_GAME', 4));
    });
}); 