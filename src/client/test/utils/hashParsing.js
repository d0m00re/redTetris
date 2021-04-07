 import hashParsing from './../../src/utils/hashParsing';

 const assert = require('assert');

 describe('utils : hashParsing', () => {
   it('#room1[d0m]', () => {
   
       let ret = hashParsing('#room1[d0m]');


       assert.deepEqual(ret, {
           username : 'd0m',
           roomname : 'room1'
       });
   });


   it('#room1[]', () => {
   
    let ret = hashParsing('#room1[]');


    assert.equal(ret, undefined);

});

it('#[d0m]', () => {
   
    let ret = hashParsing('#[d0m]');


    assert.equal(ret, undefined);

});

   it('invalid hash : #room1', () => {
    let ret = hashParsing('#room1');

    assert.equal(ret, undefined);
   })
 })