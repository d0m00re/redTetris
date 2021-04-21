import diffString from '@utils/diffString';

describe('diffString', () => {
    test('diffString', () => {
        let ret = diffString(['a', 'b'], ['c', 'd']);

        expect(ret).toEqual(['a', 'b']);
    })
})