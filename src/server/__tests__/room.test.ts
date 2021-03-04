import {Room, IRoom} from './../entity/Room';
import {User, IUser} from './../entity/User';

describe('Room test', function () {
    test('create empty room', () => {
        let room = new Room({name : 'Testouille', owner : 'Jack'});
        expect(room.getInfo()).toMatchObject({name : 'Testouille',
                                              uuid : '',
                                              userList : ['Jack'],
                                              owner : 'Jack',
                                              state : 'WAIT_USER'});
    })
})