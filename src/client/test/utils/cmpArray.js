const {cmpArray} = require('./../../src/utils/cmpArray');
const assert = require('assert');

describe('Check line complete', function() {

    let a = [10, 20, 40];
    let b = [5, 10, 20];
    let c = [10, 20, 40];
    let d = [10, 20];

    describe('cmpArray', function() {
        it('cmpArray - same', function() {
            assert.deepEqual(cmpArray(a, c), true);
        })
        it('cmpArray - different', function() {
            assert.deepEqual(cmpArray(a, b), false);
        })
        it('cmpArray - not the same size', function() {
            assert.deepEqual(cmpArray(a, d), false);
        })
    })
  });
  
    