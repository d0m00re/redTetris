import * as roomStatus from './../../src/utils/getRoomStatus';

describe('utils : getRoomStatus', () => {
    test('Invalid data', () => {
        expect(roomStatus.getStatus('invalid', 55)).toBe(undefined);
    });
    test('Open Loby', () => {
        expect(roomStatus.getStatus('WAIT_USER', 4)).toBe(roomStatus.dicoStatus.WAIT_USER);
    });
    test('Game running', () => {
        expect(roomStatus.getStatus('WAIT_USER', 7)).toBe(roomStatus.dicoStatus.WAIT_USER);
    });
    test('Game End', () => {
        expect(roomStatus.getStatus('END_GAME', 3)).toBe(roomStatus.dicoStatus.END_GAME);
    });
    test('Loby is full', () => {
        expect(roomStatus.getStatus('RUNING_GAME', 4)).toBe(roomStatus.dicoStatus.RUNING_GAME);
    });
});  