import {mergeTetriOnMap, checkValidPushTetri} from './../../src/logic/tetriLogic';

describe('checkValidPushTetri', function(){

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
    
    const tetriList = [
        [
            [0,0,3,0],
            [3,3,3,0],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,5,5,0],
            [5,5,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ];

    test('check invalid superposition :', () => {
        let tab = Array(20).fill().map(() => Array(10).fill(0));

        mergeTetriOnMap(tab, tetriList[1], {x : 3, y : 10});
        let ret = checkValidPushTetri(tab, tetriList[0], {x : 3, y : 10});
        expect(ret).toBe(false);

    });
    test('check invalid superposition 2:', () => {
        let tab = Array(20).fill().map(() => Array(10).fill(0));

        mergeTetriOnMap(tab, tetriList[0], {x : 3, y : 10});
        let ret = checkValidPushTetri(tab, tetriList[1], {x : 3, y : 10});
        expect(ret).toBe(false);

    });
    test('check valid {x: 0, y : 0', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
    
        let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 0, y : 0});
        expect(ret).toBe(true);
    })
    test('check valid {x: -10, y : -10', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
    
        let ret = checkValidPushTetri(tab, tetriBlue[0], {x : -10, y : -10});
        expect(ret).toBe(false);
    })
    test('check valid {x: 100, y : 100}', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
    
        let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 100, y : 100});
        expect(ret).toBe(false);
    })
    test('check invalid pos contact', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
        tab[19]=Array(10).fill(1);

        let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 18});
        expect(ret).toBe(false);
    })
    test('check valid pos top of the map', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
        tab[19]=Array(10).fill(1);

        let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 0});
        expect(ret).toBe(true);
    })
    test('check valid pos middle of the map', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
        tab[19]=Array(10).fill(1);

        let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 10});
        expect(ret).toBe(true);
    })
})