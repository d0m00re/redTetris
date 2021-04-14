import getKey from './../../src/utils/getKey';

describe('Get key', () => {
    test('Unknown key', () => {
        expect(getKey('BLALA')).toBe(undefined);
    });

    test('ArrowRight', () => {
        expect(getKey('ArrowRight')).toBe('right');
    });

    test('ArrowLeft', () => {
        expect(getKey('ArrowLeft')).toBe('left');
    });

    test('ArrowUp', () => {
        expect(getKey('ArrowUp')).toBe('rotate');
    });

    test('ArrowDown', () => {
        expect(getKey('ArrowDown')).toBe('down');
    });

    test('Space', () => {
        expect(getKey('Space')).toBe('space');
    });

});