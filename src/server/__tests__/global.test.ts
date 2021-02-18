import {Global} from './../entity/Global';

describe('User class test', function() {
    test('add one user', () => {
        let global = new Global();

        global.users.add('miaou');
        // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(global.users.getUser('miaou')).toMatchObject({name:'miaou', room:'', uuid:''});
    })

})