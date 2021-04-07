 import hashParsing from './../../src/utils/hashParsing';

 describe('utils : hashParsing', () => {
   test('#room1[d0m]', () => {
   
       let ret = hashParsing('#room1[d0m]');

       expect(ret).toEqual({
           username : 'd0m',
           roomname : 'room1'
        });
   });

   test('#room1[]', () => {
   
    let ret = hashParsing('#room1[]');
    expect(ret).toBe(undefined);
});

test('#[d0m]', () => {
   
    let ret = hashParsing('#[d0m]');
    expect(ret).toBe(undefined);
});

   test('invalid hash : #room1', () => {
    let ret = hashParsing('#room1');

    expect(ret).toBe(undefined);
   })

 })