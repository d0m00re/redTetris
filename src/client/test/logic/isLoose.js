const {isLoose} = require('./../../src/logic/isLoose');
const assert = require('assert');

describe('Check line complete', function() {

    let board = Array(20).fill().map(() => Array(10).fill(0));
    let board2 = Array(20).fill().map(() => Array(10).fill(0)); board2[0] = board2[0].map(() => 1);
    let board3 = Array(20).fill().map(() => Array(10).fill(0)); board3[1] = board3[1].map(() => 1);


    let tetri1 = [
        [0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,1]
    ];

    let tetri2 = [
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ]

    let tetri3 = [
        [0,1,1],
        [1,1,0],
        [0,0,0],
    ]


    describe('Loose game', function() {
        it('loose game - first line full of 1', function() {
            let ret = isLoose(board2, tetri2, {x: 0, y : -1});
            assert.deepEqual(ret, true);
        })

        it('loose game - tetri [1,1,1,1]', function() {
            let ret = isLoose(board2, tetri1, {x : 0, y : -1});            
            
            assert.deepEqual(ret, true)
        })

        it('not loose game - tetri [1,1,1,1]', function() {
            let ret = isLoose(board2, tetri1, {x : 5, y : -2});            
            assert.deepEqual(ret, false)
        })

        it('not loose game - tetri [1,1,1,1]', function() {
            let ret = isLoose(board2, tetri1, {x : 5, y : 10});            
            assert.deepEqual(ret, false)
        })

        it('no loose - empty map we can put tetri', function() {
            let ret = isLoose(board, tetri2, {x: 0, y : -1});
            assert.deepEqual(ret, false);
        })
        it('no loose - pos y - 2', function() {
            let ret = isLoose(board, tetri2, {x: 0, y : -2});
            assert.deepEqual(ret, false);
        })
        it('no loose - pos y 10 x 5', function() {
            let ret = isLoose(board, tetri2, {x: 10, y : 5});
            assert.deepEqual(ret, false);
        })
    })
  });
  
     