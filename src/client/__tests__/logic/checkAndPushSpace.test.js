import {checkAndPushSpace} from './../../src/logic/tetriLogic';

const tetriBlue = [
    [
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ],
    [
        [0,1,1],
        [0,1,0],
        [0,1,0],
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,0,1],
    ],
    [
        [0,1,0],
        [0,1,0],
        [1,1,0],
    ],
  ];

describe('checkAndPushSpace', function() {
    test('emptyBoard', () => {
        let test = Array(20).fill().map(() => Array(10).fill(0));
        let result = Array(20).fill().map(() => Array(10).fill(0));

        result[18][0] = 1;
        result[19][0] = 1;
        result[19][1] = 1;
        result[19][2] = 1;

        checkAndPushSpace(test, tetriBlue[0], {x : 0, y : 0}, 1);
        expect(test).toEqual(result);
    });

    test('one line y : 19', () => {
        let test = Array(20).fill().map(() => Array(10).fill(0));
        let result = Array(20).fill().map(() => Array(10).fill(0));

        test[19] = Array(10).fill(1);
        result[19] = Array(10).fill(1);

        result[17][0] = 1;
        result[18][0] = 1;
        result[18][1] = 1;
        result[18][2] = 1;

        checkAndPushSpace(test, tetriBlue[0], {x : 0, y : 0}, 1);
        expect(test).toEqual(result);
    })
})