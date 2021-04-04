import { Room, IRoom,  ERoomState } from './../../entity/Room';
import {RoomList} from './../../entity/RoomList';
import { User, IUser } from './../../entity/User';

import * as roomData from './../../dataset/room'


describe('RoomList', function () {
    test('getRunningsRoom', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'room1', owner : 'd0m'});
        let ret = roomlist.getRunningRooms();

        expect(ret).toEqual([]);
        let ret2 = roomlist.run('room1');
        expect([roomlist.rooms[0].getInfo()]).toEqual([{...roomData.room1_wait_1user,
                                                        state : ERoomState.RUNING_GAME}]);
    });

    test('addUser', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'room1', owner : 'd0m'});
        roomlist.addUser('room1', 'jack');

        expect([roomlist.rooms[0].getInfo()]).toEqual([roomData.room1_wait_2users]);
    });

    test('getIndexWithUsername', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'r00m1', owner : 'd0m'});
        roomlist.add({name : 'r00m2', owner : 'd0m2'})
    
        roomlist.addUser('r00m1', 'u1');
        roomlist.addUser('r00m2', 'u2');
        expect(roomlist.getIndexWithUsername('d0m')).toBe(0);
        expect(roomlist.getIndexWithUsername('u1')).toBe(0);
        expect(roomlist.getIndexWithUsername('d0m2')).toBe(1);
        expect(roomlist.getIndexWithUsername('u2')).toBe(1);
        expect(roomlist.getIndexWithUsername('fake')).toBe(-1);


    });

    test('deleteUser | 0 user === delete room', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'r00m1', owner : 'd0m'});
        expect(roomlist.deleteUser('fake')).toBe(false);
        let ret = roomlist.deleteUser('d0m');
        expect(ret).toBe(true);
        expect(roomlist.rooms.length === 0);
    });

    test('deleteUser', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'room1', owner : 'd0m'});
        roomlist.addUser('room1', 'john');

        let ret = roomlist.deleteUser('john');
        expect(ret).toBe(false);
        expect(roomlist.rooms[0].getInfo()).toEqual(roomData.room1_wait_1user);
    });

    test('delete room owner', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'room1', owner : 'd0m'});
        roomlist.addUser('room1', 'john');

        let ret = roomlist.deleteUser('d0m');
        expect(ret).toBe(false);
        expect(roomlist.rooms[0].getInfo()).toEqual({...roomData.room1_wait_1user,
                                                    owner : 'john',
                                                    userList : [{username : 'john', score : 0}]});
    });

    test('delete', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room1', owner: 'd0m' });
        
        roomlist.delete('room1');
        expect(roomlist.rooms.length).toBe(0);
    });

    test('get', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room1', owner: 'd0m' });
        roomlist.add({ name: 'room2', owner: 'd0m0' });

        expect(roomlist.get('room0')).toBe(undefined);
        expect(roomlist.get('room1')).toEqual(roomlist.rooms[0]);
        expect(roomlist.get('room2')).toEqual(roomlist.rooms[1]);
    });

    test('setStatus', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room1', owner: 'd0m' });

        expect(roomlist.setStatus('room2', ERoomState.WAIT_USER)).toBe(false);

        roomlist.setStatus('room1', ERoomState.RUNING_GAME);
        expect(roomlist.get('room1')?.getInfo().state).toBe(ERoomState.RUNING_GAME);

        roomlist.setStatus('room1', ERoomState.END_GAME);
        expect(roomlist.get('room1')?.getInfo().state).toBe(ERoomState.END_GAME);

        roomlist.setStatus('room1', ERoomState.WAIT_USER);
        expect(roomlist.get('room1')?.getInfo().state).toBe(ERoomState.WAIT_USER);

    });

    test('run', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room1', owner: 'd0m' });
        roomlist.run('room1');
        expect(roomlist.get('room1')?.getInfo().state).toBe(ERoomState.RUNING_GAME);

    });

    test('stop', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room1', owner: 'd0m' });
        roomlist.stop('room1');
        expect(roomlist.get('room1')?.getInfo().state).toBe(ERoomState.END_GAME);

    });

    test('restart', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room1', owner: 'd0m' });
        roomlist.run('room1');
        roomlist.stop('room1');
        roomlist.restart('room1');
        expect(roomlist.get('room1')?.getInfo().state).toBe(ERoomState.WAIT_USER);
    });

    test('getWithName', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'room1', owner : 'd0m'});
        expect(roomlist.getWithName('room1')?.getInfo()).toEqual(roomData.room1_wait_1user);
    });

    test('containUsername', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'coucou', owner : 'john'});
        roomlist.addUser('coucou', 'u1');

        expect(roomlist.containUsername(roomlist.rooms[0].getInfo(), 'fake')).toBe(false);
        expect(roomlist.containUsername(roomlist.rooms[0].getInfo(), 'u1')).toBe(true);
    });

    test('getRoomNameWithUsername', () => {
        let roomlist = new RoomList();

        expect(roomlist.getRoomNameWithUsername('fake')).toBe('');
        roomlist.add({name : 'room1', owner : 'jack'});
        roomlist.addUser('room1', 'u1');

        expect(roomlist.getRoomNameWithUsername('u1')).toBe('room1');
        expect(roomlist.getRoomNameWithUsername('jack')).toBe('room1');
        expect(roomlist.getRoomNameWithUsername('fake')).toBe('');

    });

    test('getRoomWithUsername', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'room1', owner : 'd0m'});
        roomlist.add({name : 'room2', owner : 'jack'});

        expect(roomlist.getRoomWithUsername('d0m')?.getInfo()).toEqual(roomData.room1_wait_1user);
        expect(roomlist.getRoomWithUsername('fake')).toBe(undefined);

    });

    test('incrUserScore', () => {
        let roomlist = new RoomList();

        roomlist.add({name : 'room1', owner : 'd0m'});
        roomlist.addUser('room1', 'jack');

        roomlist.incrUserScore('room1', 'd0m', 1);
        roomlist.incrUserScore('room1', 'jack', 2);

        let expectedOutput = {
            ...roomData.room1_wait_2users,
            userList : [{username : 'd0m', score : 100}, {username : 'jack', score : 300}]
        }
        expect(roomlist.getRoomWithRoomName('room1')?.getInfo()).toEqual(expectedOutput);
        expect(roomlist.getRoomWithRoomName('room100')?.getInfo()).toBe(undefined);

    });

    test('roomExist', () => {
        let roomlist = new RoomList();

        expect(roomlist.roomExist('fake')).toBe(false);
        roomlist.addRoom(roomData.room1_wait_1user);
        expect(roomlist.roomExist('fake')).toBe(false);
        expect(roomlist.roomExist('room1')).toBe(true);

    });



    test('getRoomWithUsername and add', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room0', owner: 'john' });
        roomlist.add({ name: 'room1', owner: 'd0m' });
        roomlist.add({ name: 'room2', owner: 'jackos' });
        expect(roomlist.getRoomWithUsername('d0m')?.getInfo()).toEqual(roomData.room1_wait_1user);
        expect(roomlist.getRoomWithUsername('fake')?.getInfo()).toBe(undefined);

    })

    test('gets', () => {
        let roomlist = new RoomList();

        expect(roomlist.gets()).toEqual([])
        roomlist.add({ name: 'room1', owner: 'd0m' });
        let expectedOutput = [
            roomData.room1_wait_1user
        ];

        expect(roomlist.gets().map(elem => elem.getInfo())).toEqual(expectedOutput);
    });
})