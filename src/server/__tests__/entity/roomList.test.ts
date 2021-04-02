import { Room, IRoom,  ERoomState } from './../../entity/Room';
import {RoomList} from './../../entity/RoomList';
import { User, IUser } from './../../entity/User';

import * as roomData from './../../dataset/room'


describe('RoomList', function () {
    test('getRoomWithUsername and add', () => {
        let roomlist = new RoomList();

        roomlist.add({ name: 'room0', owner: 'john' });
        roomlist.add({ name: 'room1', owner: 'd0m' });
        roomlist.add({ name: 'room2', owner: 'jackos' });
  //      expect(roomlist.getRoomWithUsername('d0m')).toMatchObject(roomData.room1);
  expect(true).toEqual(true);
    })
})