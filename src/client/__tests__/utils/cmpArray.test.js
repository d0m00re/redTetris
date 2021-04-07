const {cmpArray} = require('./../../src/utils/cmpArray');

describe('cmpArray', function () {
    let a = [10, 20, 40];
    let b = [5, 10, 20];
    let c = [10, 20, 40];
    let d = [10, 20];

    test('cmpArray - same', function () {
        expect(cmpArray(a, c)).toBe(true);
    })
    test('cmpArray - different', function () {
        expect(cmpArray(a, b)).toBe(false);
    })
    test('cmpArray - not the same size', function () {
        expect(cmpArray(a, d)).toBe(false);
    })
});

