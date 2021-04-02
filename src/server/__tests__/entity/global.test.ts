import {Global} from './../../entity/Global';
import {ERoomState} from './../../entity/Room';

describe('User class test', function() {
    test('add one user', () => {
        let global = new Global();

        global.users.add('miaou');
        // expect(userList.getUser('miaou')?.name).toBe('miaou');
        expect(global.users.getUser('miaou')).toMatchObject({name:'miaou', room:'', uuid:''});
    })

    test('userSubscribeToRoom', () => {
        let expectedObj = {name : 'room1', uuid : '', userList : [{username : 'd0m', score : 0}, {username : 'john', score : 0}], state : ERoomState.WAIT_USER, owner : 'd0m'};
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'jack', leaderboard : []});       
        global.createRoom({name : 'room1', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m', leaderboard : []});
        global.userSubscribeToRoom('room1', 'john');

        let room = global.getIRoomWithUsername('john');
        expect(room).toMatchObject(expectedObj);
    })

    test('getIRoomWithRoomname', () => {
        let expectedObj = {name : 'room1', uuid : '', userList : [{username : 'd0m', score : 0}, {username : 'john', score : 0}], state : ERoomState.WAIT_USER, owner : 'd0m'};
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'jack', leaderboard : []});       
        global.createRoom({name : 'room1', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m', leaderboard : []});
        global.userSubscribeToRoom('room1', 'john');

        let room = global.getIRoomWithRoomname('room1');
        expect(room).toMatchObject(expectedObj);
    })

    test('Room destroy when userList is empty', () => {
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m', leaderboard : []});
        global.leaveRoom('d0m');
        expect(undefined).toEqual(global.getIRoomWithRoomname('room0'));       
    });

    test('Room remove owner and replace it', () => {
        let expectedObj = {name : 'room0', uuid : '', userList : [{username : 'jack', score : 0}], state : ERoomState.WAIT_USER, owner : 'jack'};
        let global = new Global();

        global.users.add('d0m');
        global.users.add('jack');
        global.users.add('john');

        global.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m', leaderboard : []});
        global.rooms.addUser('room0', 'jack');
        global.leaveRoom('d0m');

        let room = global.getIRoomWithRoomname('room0');

        expect(room).toMatchObject(expectedObj);       
    });

    const testouille = (global : Global) => {
        console.log('Try send data each x seconds');
    
        console.log('Send new shadow for every RUNING ROOM');
        //let roomActif = global.rooms.rooms.filter(_room => _room.state === ERoomState.RUNING_GAME);
        let roomRunning = global.rooms.getRunningRooms();
    
        if (roomRunning === undefined || roomRunning.length === 0)
          return (0);
    
        let reEncodeData =  roomRunning.map(_room => {
          // tramsform room userlist in saveTetriBoard
          let data = _room?.userList.map(_user => {
            // find saveTetriBoard for each user
            return {
              username : _user.username,
              shadow : global.users.getUser(_user.username)?.saveTetriBoard
            } 
          });
          return ({
            roomName : _room.name,
            data : data});
        });
    
        return (reEncodeData);
          // pour chaque room en train de tourner on va envoyer l ensdesemble ees tetriminos
        /*  
        roomActif.map(_room => {
          //
          let data = global.users.users.map(_user => )
        })
        */
      }

      /*

    test('Tetsouille : ', () => {
        let globalInfo = new Global();

        globalInfo.users.add('d0m');
        globalInfo.users.add('u1');
        globalInfo.users.add('u2');

        globalInfo.createRoom({name : 'room0', uuid : '', userList : [], state : ERoomState.WAIT_USER, owner : 'd0m', leaderboard : []});
        globalInfo.rooms.addUser('room0', 'u1');
        globalInfo.rooms.addUser('room0', 'u2');

        let ret = testouille(globalInfo);

        console.log(testouille)

        expect(ret).toMatchObject({});
    })
    */

})