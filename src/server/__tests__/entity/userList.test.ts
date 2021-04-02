import {UserList} from '../../entity/UserList';
import * as UserData from './../../dataset/user';
import * as UserListData from './../../dataset/userList'

describe('UserList', function() {
    test('add', () => {
        let userList = new UserList();
        let name = UserData.johnNoRoom.name;

        userList.add(name);
          expect(userList.getUser(name)).toEqual(UserData.johnNoRoom);
    });

    test('findIndexWithUsername', () => {
        let ul = new UserList();

        ul.add(UserData.d0m_room1.name);
        ul.add(UserData.dam_room2.name);

        expect(ul.findIndexWtUsername(UserData.d0m_room1.name)).toBe(0);
        expect(ul.findIndexWtUsername(UserData.dam_room2.name)).toBe(1);
        expect(ul.findIndexWtUsername('fiou')).toBe(-1);
    })

    test('setUserDead', () => {
        let ul = new UserList();

        expect(ul.setUserDead('john')).toBe(undefined);

        ul.add(UserData.d0m_no_room.name);
        expect(ul.setUserDead(UserData.d0m_no_room.name)).toEqual({...(UserData.d0m_no_room), alive : false})
    });

    test('resetUser', () => {
        let ul = new UserList();


        ul.add(UserData.d0m_no_room.name);
        ul.setUserDead('d0m');

        expect(ul.setUserDead('john')).toBe(undefined);
        expect(ul.resetUser('d0m')).toEqual({...(UserData.d0m_no_room), alive : true});
        expect(ul.resetUser('fake')).toEqual(undefined);

    })


    test('get fake valid user', () => {
        let userList = new UserList();

        userList.add('miaou');
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUser('fake')).toBe(undefined);
    })

   



    test('delete', () => {
        let userList = new UserList();

        userList.add('miaou');
        userList.delete('miaou');
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUsers().length).toBe(0);
    });

    test('patch one user', () => {
        let userInput = UserData.d0m_no_room;
        let userOutput = UserData.d0m_room1;

        let userList = new UserList();

        userList.add(userInput.name);
        userList.patch(userInput.name, {name : userInput.name, room : 'room1', uuid : 'd0m'});
       // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUser(userInput.name)).toEqual(userOutput);

        let ret = userList.patch('fake', {name : userInput.name, room : 'room1', uuid : 'd0m'});
        expect(ret).toBe(false);
    });

    test('getUsers', () => {
        let userList = new UserList();

        userList.add(UserData.d0m_no_room.name);
        userList.add(UserData.u1_noroom.name);
        userList.add(UserData.u2_noroom.name);

        // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(userList.getUsers()).toEqual([UserData.d0m_no_room, UserData.u1_noroom, UserData.u2_noroom]);
    })

    test('getWithId', () => {
        let userList = new UserList();

        expect(userList.getWithId('fake')).toBe(undefined);
        userList.add(UserData.d0m_no_room.name);
        userList.add(UserData.u1_noroom.name);
        
        let res = userList.getWithId(UserData.d0m_no_room.uuid)?.getInfo();

        expect(res).toEqual(UserData.d0m_no_room);

    });
    
    test('setSaveTetriBoard', () => {
        let userList = new UserList();

        let newTetri : number[][] = Array(20).fill([]).map(() => Array(10).fill(1))

        userList.add(UserData.d0m_no_room.name);
        userList.add(UserData.u1_noroom.name);

        let ret = userList.setSaveTetriBoard(UserData.d0m_no_room.name, newTetri);
        let ret2 = userList.setSaveTetriBoard('fake', newTetri);

        expect(ret).toEqual({...UserData.d0m_no_room, saveTetriBoard : newTetri});
        expect(ret2).toBe(undefined);
    })

    test('add user', () => {
        let userList = new UserList();

        userList.addUser(UserData.d0m_no_room);

        expect(userList.users[0].getInfo()).toEqual(UserData.d0m_no_room);
    })

})