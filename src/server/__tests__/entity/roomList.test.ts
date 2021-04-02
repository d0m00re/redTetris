import { Room, IRoom,  ERoomState } from './../../entity/Room';
import {RoomList} from './../../entity/RoomList';
import { User, IUser } from './../../entity/User';

let room1 : IRoom = {
    name: 'room1',
    uuid: '',
    userList: [{username : 'd0m', score : 0}],
    owner: 'd0m',
    state: ERoomState.WAIT_USER,
    leaderboard : []
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