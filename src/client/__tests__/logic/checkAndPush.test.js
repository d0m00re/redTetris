import {checkAndPush} from './../../src/logic/tetriLogic';

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

describe('CheckAndPush', () => {
    test('check invalid complety outside (y)', () => {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
    
        let ret = checkAndPush(tab, tetriBlue[0], {x : -10, y : -10});
        expect(ret).toBe(false);
    })
    test('check invalid complety outside (x)', () => {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
    
        let ret = checkAndPush(tab, tetriBlue[0], {x : 10, y : 10});
        expect(ret).toBe(false);
    })
    test('check good position {x : 7, y: 10}', () => {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
    
        let ret = checkAndPush(tab, tetriBlue[0], {x : 7, y : 10});
        expect(ret).toBe(true);
    })
});