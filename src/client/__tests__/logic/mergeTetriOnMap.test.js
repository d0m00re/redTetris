import {mergeTetriOnMap} from './../../src/logic/tetriLogic';

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

describe('MergeTetriOnMap', () => {
    test ('check valid merge', () => {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
        let result = Array(20).fill().map(() => Array(10).fill(0));

        result[0][0] = 1;
        result[1][0] = 1;
        result[1][1] = 1;
        result[1][2] = 1;


        mergeTetriOnMap(tab, tetriBlue[0], {x : 0, y : 0});

        expect(tab).toEqual(result);
    })        
})