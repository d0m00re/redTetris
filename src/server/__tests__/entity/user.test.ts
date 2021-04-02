import {IUser, User} from '../../entity/User';

describe('User test', function () {
    test('create empty room', () => {
        let user = new User({name : 'player', room : 'room1', uuid : 'ewqwrewr'});
        expect(user.getInfo()).toMatchObject({name : 'player', room : 'room1', uuid : 'ewqwrewr'});
    })
})