const {isTetriCasePresent, isValidPosOnBoard, isPosContactBoard} = require('./../../src/logic/checkFunction');
const assert = require('assert');

describe('Check line complete', function() {

    let board = Array(20).fill().map(() => Array(10).fill(0));
    let board2 = Array(20).fill().map(() => Array(10).fill(0)); board2[0] = board2[0].map(() => 1);
    let board3 = Array(20).fill().map(() => Array(10).fill(0)); board3[1] = board3[1].map(() => 1);

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


    describe('Is tetri case present', function() {
        it('true', function() {
            let ret = isTetriCasePresent(tetri2, {x: 1, y : 1});
            assert.deepEqual(ret, true);
        })
        it('false', function() 
        {
            let ret = isTetriCasePresent(tetri2, {x: 1, y : 0});
            assert.deepEqual(ret, false);
        })
    })

    describe('isValidPosOnBoard', function () {
        it('true {x : 5, y : 5}', function() {
            let ret = isValidPosOnBoard(board, {x: 5, y : 5});
            assert.deepEqual(ret, true);
        })
        it('false : {x : 40, y : 5}', function() 
        {
            let ret = isValidPosOnBoard(board, {x: 40, y : 5});
            assert.deepEqual(ret, false);
        })
        it('false : {x : -40, y : 5}', function() 
        {
            let ret = isValidPosOnBoard(board, {x: -40, y : 5});
            assert.deepEqual(ret, false);
        })
        it('false : {x : 0, y : -5}', function() 
        {
            let ret = isValidPosOnBoard(board, {x: 0, y : -5});
            assert.deepEqual(ret, false);
        })
    })

    describe('isPosContactBoard', function () {
        it ('true contact seconde line', function() {
            let ret = isPosContactBoard(board2, tetri3, {x : 1, y : 0}, {x : 1, y : 0});
            assert.deepEqual(ret, true);
        })
        it ('false non contact seconde line, tetri case value === 0', function() {
            let ret = isPosContactBoard(board3, tetri3, {x : 1, y : 0}, {x : 2, y : 1});
            assert.deepEqual(ret, false);
        })
        it ('false contact seconde line, board case value === 0', function() {
            let ret = isPosContactBoard(board2, tetri3, {x : 1, y : 4}, {x : 1, y : 0});
            assert.deepEqual(ret, false);
        })
        it ('false contact seconde line, board and tetri value === 0', function() {
            let ret = isPosContactBoard(board, tetri3, {x : 5, y : 5}, {x : 2, y : 1});
            assert.deepEqual(ret, false);
        })
    })
  });
  
    