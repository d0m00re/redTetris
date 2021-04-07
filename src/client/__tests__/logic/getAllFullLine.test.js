import {getAllFullLine} from './../../src/logic/tetriLogic';

describe('getAllFullLine', function() {
    test('check complete one line', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
        tab[19]=Array(10).fill(1);
    
        let ret = getAllFullLine(tab);
        expect(ret).toEqual([19]);
    })
    test('check complete zero line', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
    
        let ret = getAllFullLine(tab);
        expect(ret).toEqual([]);
    })
    test('check complete two lines', function() {
        let tab = Array(20).fill().map(() => Array(10).fill(0));
        tab[19]=Array(10).fill(1);
        tab[18]=Array(10).fill(1);
    
        let ret = getAllFullLine(tab);
        expect(ret).toEqual([18, 19]);
    })
});