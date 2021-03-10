import {Global} from './../entity/Global';
import {ERoomState} from './../entity/Room';

describe('User class test', function() {
    test('add one user', () => {
        let global = new Global();

        global.users.add('miaou');
        // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(global.users.getUser('miaou')).toMatchObject({name:'miaou', room:'', uuid:''});
    })

    test('userSubscribeToRoom', () => {
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'jack'});       
        global.createRoom({name : 'room1', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m'});
        global.userSubscribeToRoom('room1', 'john');

        let room = global.getIRoomWithUsername('john');
        expect(room).toMatchObject({name : 'room1', uuid : '', userList : ['d0m', 'john'], state : ERoomState.WAIT_USER, owner : 'd0m'});
    })

    test('getIRoomWithRoomname', () => {
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'jack'});       
        global.createRoom({name : 'room1', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m'});
        global.userSubscribeToRoom('room1', 'john');

        let room = global.getIRoomWithRoomname('room1');
        expect(room).toMatchObject({name : 'room1', uuid : '', userList : ['d0m', 'john'], state : ERoomState.WAIT_USER, owner : 'd0m'});
    })

    test('Room destroy when userList is empty', () => {
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m'});
        global.leaveRoom('d0m');
        expect(undefined).toEqual(global.getIRoomWithRoomname('room0'));       
    });

    test('Room remove owner and replace it', () => {
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m'});
        global.rooms.addUser('room0', 'jack');
        global.leaveRoom('d0m');

        let room = global.getIRoomWithRoomname('room0');

        console.log('------------------------------------------');
        console.log(global.rooms.gets());
        
        

        expect(room).toMatchObject({name : 'room0', uuid : '', userList : ['jack'], state : ERoomState.WAIT_USER, owner : 'jack'});       
    });

})