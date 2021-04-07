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

        it('no delete line', (() => {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            let {newMap} = deleteFullLine(tab, 0);

            expect(tab).toEqual(newMap);
        }))
        it('delete one line', () => {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            let result = Array(20).fill().map(() => Array(10).fill(0))
            tab[19] = Array(10).fill(1);
            let {newMap} = deleteFullLine(tab, 0);

            expect(result).toEqual(newMap);
        })
        it('one line block', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            let result = Array(20).fill().map(() => Array(10).fill(0));
            test[19] = Array(10).fill(1);
            result[19] = Array(10).fill(1);
            let {newMap} = deleteFullLine(test, 1);

            expect(result).toEqual(newMap);
        })
})