const {deleteFullLine} = require('./../../src/logic/tetriLogic');

describe('deleteFullLine', function() {
        let board = Array(20).fill().map(() => Array(10).fill(0));

        test ('empty', function() {
            let res = deleteFullLine(board, 0);
            expect(res.newMap).toEqual(board);
        });

        let boardTest =  Array(20).fill().map(() => Array(10).fill(0));
        boardTest[19] = Array(10).fill(1);

        test ('last line full', () => {
            let res = deleteFullLine(board, 0);
            expect(res.newMap).toEqual(board);
        });
})