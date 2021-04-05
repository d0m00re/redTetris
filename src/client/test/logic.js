const assert = require('assert');

const {
    mergeTetriOnMap,
    checkValidPushTetri,
    checkAndPush,
    getAllFullLine,
    deleteFullLine,
    checkAndPushSpace,
    nbLineWillBeDelete
} = require('./../src/logic/tetriLogic');

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

    describe('MergeTetriOnMap', () => {
        it ('check valid merge', () => {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            let result = Array(20).fill().map(() => Array(10).fill(0));

            result[0][0] = 1;
            result[1][0] = 1;
            result[1][1] = 1;
            result[1][2] = 1;


            mergeTetriOnMap(tab, tetriBlue[0], {x : 0, y : 0});

            assert.deepEqual(tab, result);
        })        
    })
     
    describe('checkValidPushTetri', function(){
        it('check valid {x: 0, y : 0', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 0, y : 0});
            assert.equal(ret, true);
        })
        it('check valid {x: -10, y : -10', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : -10, y : -10});
            assert.equal(ret, false);
        })
        it('check valid {x: 100, y : 100}', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 100, y : 100});
            assert.equal(ret, false);
        })
        it('check invalid pos contact', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);

            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 18});
            assert.equal(ret, false);
        })
        it('check valid pos top of the map', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);

            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 0});
            assert.equal(ret, true);
        })
        it('check valid pos middle of the map', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);

            let ret = checkValidPushTetri(tab, tetriBlue[0], {x : 5, y : 10});
            assert.equal(ret, true);
        })
    })
    describe('CheckAndPush', function() {
        it('check invalid complety outsite', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkAndPush(tab, tetriBlue[0], {x : -10, y : -10});
            assert.equal(ret, false);
        })
        it('check invalid complety outsite', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkAndPush(tab, tetriBlue[0], {x : 10, y : 10});
            assert.equal(ret, false);
        })
        it('check good position {x : 7, y: 10}', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = checkAndPush(tab, tetriBlue[0], {x : 7, y : 10});
            assert.equal(ret, true);
        })
    });
    describe('getAllFullLine', function() {
        it('check complete one line', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);
        
            let ret = getAllFullLine(tab);
            assert.deepEqual(ret, [19]);
        })
        it('check complete zero line', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
        
            let ret = getAllFullLine(tab);
            assert.deepEqual(ret, []);
        })
        it('check complete one line', function() {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            tab[19]=Array(10).fill(1);
            tab[18]=Array(10).fill(1);
        
            let ret = getAllFullLine(tab);
            assert.deepEqual(ret, [18, 19]);
        })
    });
    describe('deleteFullLine', function() {
        it('no delete line', (() => {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            let {newMap} = deleteFullLine(tab, 0);

            assert.deepEqual(tab, newMap);
        }))
        it('delete one line', () => {
            let tab = Array(20).fill().map(() => Array(10).fill(0));
            let result = Array(20).fill().map(() => Array(10).fill(0))
            tab[19] = Array(10).fill(1);
            let {newMap} = deleteFullLine(tab, 0);

            assert.deepEqual(result, newMap);
        })
        it('one line block', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            let result = Array(20).fill().map(() => Array(10).fill(0));
            test[19] = Array(10).fill(1);
            result[19] = Array(10).fill(1);
            let {newMap} = deleteFullLine(test, 1);

            assert.deepEqual(result, newMap);
        })
    })
    describe('checkAndPushSpace', function() {
        it ('emptyBoard', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            let result = Array(20).fill().map(() => Array(10).fill(0));

            result[18][0] = 1;
            result[19][0] = 1;
            result[19][1] = 1;
            result[19][2] = 1;

            checkAndPushSpace(test, tetriBlue[0], {x : 0, y : 0}, 1);
            assert.deepEqual(test, result);
        });

        it ('one line y : 19', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            let result = Array(20).fill().map(() => Array(10).fill(0));

            test[19] = Array(10).fill(1);
            result[19] = Array(10).fill(1);

            result[17][0] = 1;
            result[18][0] = 1;
            result[18][1] = 1;
            result[18][2] = 1;

            checkAndPushSpace(test, tetriBlue[0], {x : 0, y : 0}, 1);
            assert.deepEqual(test, result);
        })
    })

    describe('nbLineWillBeDelete', () => {
        it('no delete line', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            assert.equal(nbLineWillBeDelete(test, 0), 0);
        });

        it('1) one delete line', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            test[1] = Array(10).fill(1);
            assert.equal(nbLineWillBeDelete(test, 0), 1);
        });

        it('2) one delete line', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            test[1] = Array(10).fill(1);
            test[10] = [...Array(9).fill(1), 0]
            assert.equal(nbLineWillBeDelete(test, 0), 1);
        });

        it('3) line block', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            test[19] = Array(10).fill(1);
            test[10] = Array(10).fill(1);
            assert.equal(nbLineWillBeDelete(test, 2), 1);
        });

        it('4) line block', () => {
            let test = Array(20).fill().map(() => Array(10).fill(0));
            test[10] = Array(10).fill(1);
            assert.equal(nbLineWillBeDelete(test, 10), 0);
        });
    })
}) 