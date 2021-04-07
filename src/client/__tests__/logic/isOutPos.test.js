const {isOutPos} = require('./../../src/logic/tetriLogic');

describe('isOutPos', () => {
    let board = Array(20).fill().map(() => Array(10).fill(0));

    test('in', () => {
        let ret = isOutPos(board, {x : 0, y : 0}, {x : 0, y : 0});

        expect(ret).toBe(false);
    });

    test('outBottom', () => {
        let ret = isOutPos(board, {x : 0, y : 19}, {x : 0, y : 2});

        expect(ret).toBe(true);
    });

    test('outLeft', () => {
        let ret = isOutPos(board, {x : 9, y : 0}, {x : 1, y : 0});

        expect(ret).toBe(true);
    });
})