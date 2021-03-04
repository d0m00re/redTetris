import {UserList} from '../entity/User';

describe('User class test', function() {
    test('add one user', () => {
        let userList = new UserList();

        userList.add('miaou');
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUser('miaou')).toMatchObject({name:'miaou', room:'', uuid:''});
    })

    test('get valid user', () => {
        let userList = new UserList();

        userList.add('miaou');
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUser('miaou')).toMatchObject({name:'miaou', room:'', uuid:''});
    })

    test('get fake valid user', () => {
        let userList = new UserList();

        userList.add('miaou');
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUser('miaffou')).toBe(undefined);
    })

    test('patch one user', () => {
        let userList = new UserList();

        userList.add('miaou');
        userList.patch('miaou', {name : 'miaou', room : 'roucoups', uuid : 'jack'});
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUser('miaou')).toMatchObject({name:'miaou', room:'roucoups', uuid:'jack'});
    })

    test('getUsers test', () => {
        let userList = new UserList();

        userList.add('miaou');
        userList.add('john');
        userList.add('jack');

        // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUsers()).toMatchObject([{name:'miaou', room:'', uuid:''},{name:'john', room:'', uuid:''},{name:'jack', room:'', uuid:''}]);
    })

    test('delete test', () => {
        let userList = new UserList();

        userList.add('miaou');
        userList.delete('miaou')
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUsers().length).toBe(0);
    })
})