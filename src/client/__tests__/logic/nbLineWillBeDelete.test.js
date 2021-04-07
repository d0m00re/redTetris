import {nbLineWillBeDelete} from './../../src/logic/tetriLogic';


describe('nbLineWillBeDelete', () => {
    test('no delete line', () => {
        let test = Array(20).fill().map(() => Array(10).fill(0));
        expect(nbLineWillBeDelete(test, 0)).toBe(0);
    });

    test('1) one delete line', () => {
        let test = Array(20).fill().map(() => Array(10).fill(0));
        test[1] = Array(10).fill(1);
        expect(nbLineWillBeDelete(test, 0)).toBe(1);
    }); 

    test('2) one delete line', () => {
        let test = Array(20).fill().map(() => Array(10).fill(0));
        test[1] = Array(10).fill(1);
        test[10] = [...Array(9).fill(1), 0]
        expect(nbLineWillBeDelete(test, 0)).toBe(1);
    });

    test('3) line block', () => {
        let test = Array(20).fill().map(() => Array(10).fill(0));
        test[19] = Array(10).fill(1);
        test[10] = Array(10).fill(1);
        expect(nbLineWillBeDelete(test, 2)).toBe(1);
    });

    test('4) line block', () => {
        let test = Array(20).fill().map(() => Array(10).fill(0));
        test[10] = Array(10).fill(1);
        expect(nbLineWillBeDelete(test, 10)).toBe(0);
    });
})