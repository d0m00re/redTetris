import {IUser, User} from '@entity/User';
import * as UserData from '@dataset/user';


describe('User test', function () {

    test('Add an user with room', () => {

        let user = new User({name : 'd0m', room : 'room1', uuid : 'd0m'});
        expect(user.getInfo()).toEqual(UserData.d0m_room1);
    });

    test('Add an user without room', () => {
        let user = new User({name : 'jack', room : '', uuid : 'jack'});
        expect(user.getInfo()).toEqual(UserData.jackNoRoom);
    })
});