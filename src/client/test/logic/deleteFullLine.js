const {deleteFullLine} = require('./../../src/logic/tetriLogic');
const assert = require('assert');

describe('deleteFullLine', function() {
        let board = Array(20).fill().map(() => Array(10).fill(0));

        it ('empty', function() {
            let res = deleteFullLine(board, 0);
            assert.deepEqual(res.newMap, board);
        })

        let boardTest =  Array(20).fill().map(() => Array(10).fill(0));
        boardTest[19] = Array(10).fill(1);

        it ('last line full', () => {
            let res = deleteFullLine(board, 0);
            assert.deepEqual(res.newMap, board);
        })
})