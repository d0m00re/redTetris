const {addPos} = require('./../../src/logic/addPos');
const assert = require('assert');

describe('Check line complete', function() {
    describe('Add pos', function() {
        it('add 2 pos', function() {
            let p1 = {x : 5, y : 2};
            let p2 = {x : 10, y : 2};
            let result = {x : 15, y : 4};
            let resultFunc = addPos(p1, p2);
            assert.deepEqual(result, resultFunc)
        })
    })
  });
  
    