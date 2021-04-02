import { Room, IRoom } from './../../entity/Room';
import { User, IUser } from './../../entity/User';

describe('Room', function () {
    test('create empty room', () => {
        let expectedObj = {
            name: 'Testouille',
            uuid: '',
            userList: [{username : 'Jack', score : 0}],
            owner: 'Jack',
            state: 'WAIT_USER'
        };
        let room = new Room({ name: 'Testouille', owner: 'Jack' });
        expect(room.getInfo()).toEqual(expectedObj);
    }),
        test('incrUserScore', () => {
            let room = new Room({ name: 'room1', owner: 'jack' });
            let expectedOutput = [{username : 'jack', score : 1300},
                                  {username : 'miaou', score : 300},
                                  {username : 'd0m', score : 100},
                                  {username : 'u1', score : 0},
                                  {username : 'u2', score : 0}];

            room.addUser('miaou');
            room.addUser('d0m');
            room.addUser('u1');
            room.addUser('u2');

            room.incrUserScore('jack', 3); room.incrUserScore('jack', 1);
            room.incrUserScore('miaou', 2);
            room.incrUserScore('d0m', 1);
            room.incrUserScore('u1', 0)
            room.incrUserScore('u2', 10000);

            let result = room.getInfo().userList;

            expect(result).toEqual(expectedOutput);
        })
}) 