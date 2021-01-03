const Piece = require('./../src/utils/Piece');

describe('Check line complete', function() {
    describe('findLineComplete', function() {
      it('zero line find', function() {
          let result = findLineComplete(tab0row);
          assert.deepEqual(result, []);
      });
    })
});