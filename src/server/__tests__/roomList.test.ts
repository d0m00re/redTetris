import { Room, IRoom, RoomList } from './../entity/Room';
import { User, IUser } from './../entity/User';

let room1 = {
    name: 'room1',
    uuid: '',
    userList: ['d0m'],
    owner: 'd0m',
    state: 'WAIT_USER'
};

//read only test
 



describe('RoomList', function () {
    test('getRoomWithUsername and add', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room0', owner: 'john' });
        roomlist.add({ name: 'room1', owner: 'd0m' });
        roomlist.add({ name: 'room2', owner: 'jackos' });
        expect(roomlist.getRoomWithUsername('d0m')).toMatchObject(room1);
    })
})