import { Room, IRoom, ERoomState } from '@entity/Room';
import { User, IUser } from '@entity/User';
import * as RoomData from '@dataset/room';

describe('Room', () => 
{
    test('incrUserScore', () => {
        let currRoom = RoomData.room1_wait_2users;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        let ret = room.incrUserScore('roups', 2);
        expect(ret).toEqual(false);

        ret = room.incrUserScore('d0m', 1);
        expect(ret).toEqual(true);
        expect(room.getInfo()).toEqual({...currRoom, userList : [{username : 'd0m', score : 100}]})

    });
    test('leaderboardReset', () => {
        let currRoom = RoomData.room1_wait_1user;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.incrUserScore('d0m', 1);
        room.leaderboardAdd('d0m');
        room.leaderboardReset();
        expect(room.getInfo()).toEqual({...currRoom,
                                        userList : [{username : 'd0m', score : 100}],
                                        leaderboard : []});
    });

    test('leaderboardAdd', () => {
        let currRoom = RoomData.room1_wait_2users;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});


        room.incrUserScore('d0m', 1);
        let ret = room.leaderboardAdd('d0m');
        expect(ret).toEqual(true);
        ret = room.leaderboardAdd('fake');
        expect(ret).toEqual(false);
        expect(room.getInfo()).toEqual({...currRoom,
                                        userList : [{username : 'd0m', score : 100}],
                                        leaderboard : [{username : 'd0m', score : 100}]});
    })

    test('emptyUserList', () => {
        let currRoom = RoomData.room1_wait_1user
        let room = new Room({name : currRoom.name, owner : currRoom.owner});


        room.addUser('jack');
        expect(room.emptyUserList()).toBe(false);

        room.deleteUser('jack');
        room.deleteUser('d0m');
        expect(room.emptyUserList()).toBe(true);

    });

    test('addUser', () => {
        let currRoom = RoomData.room1_wait_1user;
        let outputRoom = RoomData.room1_wait_2users;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.addUser('jack');
     //   expect(room.addUser('jack')).toBe(true);

        expect(room.getInfo()).toEqual(outputRoom);

        expect(room.addUser('jack')).toBe(false);
    });

    test('deleteUser : no owner delete', () => {
        let currRoom = RoomData.room1_wait_1user;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.addUser('d0m');
        room.addUser('user1');
        let ret = room.deleteUser('user1');
        expect(ret).toBe(false);
        ret = room.deleteUser('fake');
        expect(ret).toBe(false);
        expect(room.getInfo()).toEqual(currRoom);        
    });

    test('deleteUser : delete owner', () => {
        let currRoom = RoomData.room1_wait_1user;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.addUser('jack');
        let ret = room.deleteUser('d0m');
    
        expect(ret).toBe(true);
        expect(room.getInfo()).toEqual({
            ...currRoom,
            owner : 'jack',
            userList : [{username : 'jack', score : 0}]
        });
    });

    test('run', () => {
        let currRoom = RoomData.room1_wait_1user;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.run();
        expect(room.getInfo()).toEqual({...currRoom, state : ERoomState.RUNING_GAME});
    });

    test('stop', () => {
        let currRoom = RoomData.room1_wait_2users;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.leaderboard = [{username : 'd0m', score : 0}];

        room.addUser('jack');
        room.stop();

        expect(room.getInfo()).toEqual(
            {
                ...currRoom,
                state : ERoomState.END_GAME,
                leaderboard : [{username : 'jack', score : 0}, {username : 'd0m', score : 0}]
            }
        );
    });

    test('stop set winner', () => {
        let currRoom = RoomData.room1_wait_2users;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.leaderboard = [{username : 'd0m', score : 0}];

        room.addUser('jack');
        room.stop();

     //   console.log(room.getInfo())
        expect(room.getInfo()).toEqual(
            {
                ...currRoom,
                state : ERoomState.END_GAME,
                leaderboard : [{username : 'jack', score : 0}, {username : 'd0m', score : 0}]
            }
        );
    });

    test('restart', () => {
        let currRoom = RoomData.room1_wait_2users;
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        room.addUser('jack');
        room.incrUserScore('jack', 1);
        room.run();
        room.restart();

        expect(room.getInfo()).toEqual(currRoom);


    });

    test('getInfo', () => {
        let currRoom = RoomData.room1_wait_1user
        let room = new Room({name : currRoom.name, owner : currRoom.owner});

        expect(room.getInfo()).toEqual(room);
    })
}) 