import { Global } from './../entity/Global';
import { ERoomState, IRoom } from './../entity/Room';


interface IShadow  {
    username : string,
    shadow : number[][] | undefined
}

interface IShadowRoom {
    roomname : string,
    shadows : IShadow[]
}
const testouille = (global: Global) : IShadowRoom[] | undefined => {
    console.log('Try send data each x seconds');

    console.log('Send new shadow for every RUNING ROOM');
    //let roomActif = global.rooms.rooms.filter(_room => _room.state === ERoomState.RUNING_GAME);
    let roomRunning = global.rooms.getRunningRooms();
    
    if (roomRunning === undefined || roomRunning.length === 0)
    {
        console.log('No room running')
        return (undefined);
    }
    let reEncodeData = roomRunning.map(_room => {
        // tramsform room userlist in saveTetriBoard
        let data = _room?.userList.map(_user => {
            // find saveTetriBoard for each user
            return {
                username: _user.username,
                shadow: global.users.getUser(_user.username)?.saveTetriBoard
            }
        });
        return ({
            roomname: _room.name,
            shadows: data
        });
    });

    console.log('Re Encode Data : ');
    console.log(reEncodeData);
    

    return (reEncodeData);
    // pour chaque room en train de tourner on va envoyer l ensdesemble ees tetriminos
    /*  
    roomActif.map(_room => {
      //
      let data = global.users.users.map(_user => )
    })
    */
}

const coucou = () => {
    console.log('COUCOU');
    

    let globalInfo = new Global();

    globalInfo.users.add('d0m');
    globalInfo.users.add('u1');
    globalInfo.users.add('u2');

    globalInfo.createRoom({ name: 'room0', uuid: '', userList: [], state: ERoomState.WAIT_USER, owner: 'd0m', leaderboard: [] });
    globalInfo.rooms.addUser('room0', 'u1');
    globalInfo.rooms.addUser('room0', 'u2');

    console.log('========>');
    

    console.log(globalInfo.rooms.getRoomWithRoomName('room0'));
    globalInfo.rooms.getRoomWithRoomName('room0')?.run();

    let ret = testouille(globalInfo);
    console.log('Test --->');
    console.log(ret);
    if (ret !== undefined && ret[0] !== undefined && ret[0].shadows !== undefined && ret[0].shadows[0].shadow !== undefined)
        console.log(ret[0].shadows[0].shadow)
}

coucou();