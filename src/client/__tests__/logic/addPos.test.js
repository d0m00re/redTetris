const {addPos} = require('./../../src/logic/addPos');

describe('addPos', function() {
        it('add 2 pos', function() {
            let result = {x : 15, y : 4};
            let resultFunc = addPos({x : 5, y : 2}, {x : 10, y : 2});

            expect(result).toEqual(resultFunc)
        })
})

  
     