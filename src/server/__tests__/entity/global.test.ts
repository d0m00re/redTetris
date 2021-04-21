import { Global, IShadowRoom } from '@entity/Global';
import { ERoomState } from '@entity/Room';

import * as RoomData from '@dataset/room';
import * as UserData from '@dataset/user';

describe('User class test', function () {
  test('getIUserWithUsername', () => {
    let global = new Global();

    global.createUser(UserData.d0m_no_room);

    expect(global.getIUserWithUsername(UserData.d0m_no_room.name)).toEqual(UserData.d0m_no_room);
    expect(global.getIUserWithUsername('fake')).toEqual(undefined);

  });

  test('getIRoomWithUsername | with owner name', () => {
    let global = new Global();

    global.createUser(UserData.d0m_no_room);
    global.createRoom(RoomData.room1_wait_1user);

    expect(global.getIRoomWithUsername('d0m')).toEqual(RoomData.room1_wait_1user);
    expect(global.getIRoomWithUsername('fake')).toEqual(undefined);

  });

  test('getIRoomWithUsername | with no owner', () => {
    let global = new Global();

    global.createUser(UserData.d0m_no_room);
    global.createRoom(RoomData.room1_wait_1user);
    global.createUser(UserData.jackNoRoom);

    global.userSubscribeToRoom('room1', 'jack');
    expect(global.getIRoomWithUsername('jack')).toEqual(RoomData.room1_wait_2users);

  });

  test('getIRoomWithRoomname', () => {
    let global = new Global();

    global.createRoom(RoomData.room1_wait_1user);
    expect(global.getIRoomWithRoomname(RoomData.room1_wait_1user.name)).toEqual(RoomData.room1_wait_1user);
  });

  test('userUnsubscribeToRoom', () => {
    let global = new Global();

    global.createRoom(RoomData.room1_wait_1user);
    global.createUser(UserData.jackNoRoom);
    global.userSubscribeToRoom(RoomData.room1_wait_1user.name, UserData.jackNoRoom.name);

    global.userUnsubscribeToRoom(UserData.jackNoRoom.name);
    expect(global.getIUserWithUsername(UserData.jackNoRoom.name)).toEqual(UserData.jackNoRoom);
    expect(global.getIRoomWithRoomname(RoomData.room1_wait_1user.name)).toEqual(RoomData.room1_wait_1user);
  });

  test('checkEndGame - no end', () => {
    let global = new Global();

    global.createUser(UserData.d0m_room1);
    global.createRoom(RoomData.room1_wait_1user);

    let ret = global.checkEndGame('fake');
    expect(ret).toBe(undefined);
    ret = global.checkEndGame('d0m');
    expect(ret).toEqual(RoomData.room1_wait_1user);

  });

  test('checkEndGame - solo player end', () => {
    let global = new Global();

    global.createUser(UserData.d0m_room1);
    global.createRoom(RoomData.room1_wait_1user);
    global.setUserDeadInRoom('d0m');

    let ret = global.checkEndGame('d0m');
    expect(ret).toEqual({
      ...RoomData.room1_wait_1user,
      state: ERoomState.END_GAME,
      leaderboard: [{ username: 'd0m', score: 0 }]
    });
  });

  test('checkEndGame - multiplayer end', () => {
    let global = new Global();

    global.createUser(UserData.d0m_room1);
    global.createUser(UserData.jackNoRoom);

    global.createRoom(RoomData.room1_wait_1user);
    global.userSubscribeToRoom('room1', 'jack');
    global.setUserDeadInRoom('d0m');

    let ret = global.checkEndGame('d0m');
    expect(ret).toEqual({
      ...RoomData.room1_wait_2users,
      state: ERoomState.END_GAME,
      leaderboard: [{ username: 'jack', score: 0 }, { username: 'd0m', score: 0 }]
    });
  });

  test('getUserWithId', () => {
    let global = new Global();

    global.createUser(UserData.d0m_room1);
    global.createUser(UserData.jackNoRoom);

    expect(global.getUserWithId('fake')).toBe(undefined);

    expect(global.getUserWithId('d0m')).toEqual(UserData.d0m_room1);
    expect(global.getUserWithId('jack')).toEqual(UserData.jackNoRoom);

  });

  test('createRoom', () => {
    let global = new Global();

    global.createRoom(RoomData.room1_wait_1user);
    expect(global.getIRoomWithRoomname(RoomData.room1_wait_1user.name)).toEqual(RoomData.room1_wait_1user);
  });

  // l element room du user est inutile go le virer

  // a revoir le room d el utilisateur
  test('leaveRoom', () => {
    let global = new Global();

    global.createUser(UserData.d0m_room1);
    global.createUser(UserData.jackNoRoom);
    global.createRoom(RoomData.room1_wait_1user);
    global.userSubscribeToRoom(RoomData.room1_wait_1user.name, UserData.jackNoRoom.name);

    global.leaveRoom(UserData.jackNoRoom.name);
   // expect(global.getIRoomWithRoomname(RoomData.room1_wait_1user.name)).toEqual(RoomData.room1_wait_1user);
   //    expect(global.getIUserWithUsername(UserData.jackNoRoom.name)).toEqual(UserData.jackNoRoom);

    global.leaveRoom(UserData.d0m_room1.name);
    
 //   expect(global.getIUserWithUsername(UserData.d0m_no_room.name)).toEqual(UserData.d0m_no_room);
  //  expect(global.rooms.rooms.length).toBe(0);
  });

  test('getAllEntity', () => {
    let global = new Global();
    let expectedOutput = {
      rooms: [
        RoomData.room1_wait_1user
      ],
      users: [
        UserData.d0m_room1,
        UserData.jackNoRoom
      ]
    }

    global.createUser(UserData.d0m_room1);
    global.createUser(UserData.jackNoRoom);
    global.createRoom(RoomData.room1_wait_1user);

    expect(global.getAllEntity()).toEqual(expectedOutput);
  });

  
  test('generateAllRoomRunningShadows', () => {
    let global = new Global();
    let newTetri = Array(20).fill([]).map(() => Array(10).fill(1));
    let newTetri2 = Array(20).fill([]).map(() => Array(10).fill(2));

    global.createUser(UserData.d0m_room1);
    global.createUser(UserData.jackNoRoom);
    global.createRoom(RoomData.room1_wait_1user);
    global.userSubscribeToRoom('room1', 'jack');

    expect(global.generateAllRoomRunningShadows()).toBe(undefined);

    global.rooms.run('room1');

    global.setSaveTetriBoard('d0m', newTetri);
    global.setSaveTetriBoard('jack', newTetri2);

    let expectedOutput : IShadowRoom[] = [
      {
        roomname : 'room1',
        shadows :
          [
            {
              username : 'd0m',
              shadow : newTetri
            },
            {
              username : 'jack',
              shadow : newTetri2
            }
          ]
      }
    ]

    expect(global.generateAllRoomRunningShadows()).toEqual(expectedOutput);
  })
  

})