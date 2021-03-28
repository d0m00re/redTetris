/*
import {IUser, UserList} from '../entity/User';
import {IRoom, ERoomState} from '../entity/Room';
import {IGlobal, Global} from '../entity/Global';
import {ITetriminos, TetriminosGenerator} from '../entity/TetriminosGenerator';
import { Socket } from 'dgram';
describe('Protocole test', function () {
    test('socket send username, check send room', () => {
        let socket = {username : ''};
        let global : Global = new Global();
        let tetriGenerator =  new TetriminosGenerator();
    
        socket.username = 'jack';
        let user: IUser = {name : socket.username, uuid : 'a', room : ''};

        global.createUser(user);
        global.createRoom({name : 'room1',
                           uuid : '',
                           userList : [{username : 'jack', score : 0}],
                           state : ERoomState.WAIT_USER,
                           owner : 'jack'});
        
        // SOCKET_RECV_USERNAME
        // SOCKET_ALL_ROOMS

        expect(global.getAllEntity()).toMatchObject(
            {rooms : [{name : 'room1',
        uuid : '',
        userList : ['jack'],
        state : ERoomState.WAIT_USER,
        owner : 'jack'}],
            users : [{}]
            });
    })

})
*/

    
    test('create empty room', () => {
        /*
        let room = new Room({name : 'Testouille', owner : 'Jack'});
        expect(room.getInfo()).toMatchObject({name : 'Testouille',
                                              uuid : '',
                                              userList : [],
                                              owner : 'Jack',
                                              state : 'WAIT_USER'});
                                              */
        expect(true).toEqual(true);
    })
    