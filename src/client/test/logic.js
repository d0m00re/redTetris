const assert = require('assert');

const {checkAndPush, checkValidPushTetri, mergeTetriOnMap} = require('./../src/logic/tetriLogic');

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
  ]

describe('Logic',function() {
    describe('mergeTetriOnMap', function() {

    });
    describe('checkValidPushTetri', function() {

    });
    describe('checkAndPush', function() {
        it('check invalid complety outsite', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkAndPush(tab, tetriBlue[0], {x : -10, y : -10});
            assert.equal(false, false);
        })
    });
})