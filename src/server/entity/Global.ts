import { IUser, User } from './User';
import {UserList} from './UserList';

import { IRoom, Room } from './Room';
import {RoomList} from './RoomList';
 
export interface IShadow  {
    username : string,
    shadow : number[][] | undefined
}

export interface IShadowRoom {
    roomname : string, 
    shadows : IShadow[]
}

export interface IGlobal {
    users: UserList;
    rooms: RoomList;
}

export class Global {
    users: UserList;
    rooms: RoomList;

    constructor() {
        this.users = new UserList();
        this.rooms = new RoomList();
    }

    getIUserWithUsername(username : string) : IUser | undefined {
        let user = this.users.getUser(username)?.getInfo();
    
        return (user); 
    }

    getIRoomWithUsername(username : string) : IRoom | undefined {        
        let room = this.rooms.getRoomWithUsername(username)?.getInfo();

        return (room);
    }

    getIRoomWithRoomname(roomname : string) : IRoom | undefined {
        return (this.rooms.getRoomWithRoomName(roomname)?.getInfo());
    }

    userUnsubscribeToRoom(username : string) : boolean {
        this.rooms.deleteUser(username);
        return true;
    }

    userSubscribeToRoom(roomname : string, username : string) : boolean {
        this.rooms.addUser(roomname, username);
        return true;
    }

    // chdeck end game
    checkEndGame(username: string): IRoom | undefined {
        //
        //let room : IRoom = this.rooms.containUsername();

        let room : Room | undefined;

        room = this.rooms.getRoomWithUsername(username);        
        
        if (room === undefined)
            return undefined;

        // get user interface total
        let listUserInterface = room.userList.map(_user => this.users.getUser(_user.username)?.getInfo());

        let countAlive : number = listUserInterface.filter(_user => _user?.alive === true).length;
        let countDeath : number = listUserInterface.filter(_user => _user?.alive === false).length;
        
        console.log(`${countAlive} === 0 || (${countAlive} ===  1 && ${countDeath} > 0) === ${countAlive === 0 || (countAlive === 1 && countDeath > 0)}`)
        if (countAlive === 0 || (countAlive === 1 && countDeath > 0)) // game loose
        {
            console.log('END GAME');
            room.stop();

            //return room.getInfo();
        }
        console.log('ONE USER DEAD');
        console.log(room.getInfo());
        return room.getInfo();
    }

    createUser(user: IUser) {
        this.users.addUser(user);
    }

    setSaveTetriBoard(username: string, saveTetriBoard: number[][]): IUser | undefined {
        return this.users.setSaveTetriBoard(username, saveTetriBoard);
    }



    //user dead
    setUserDeadInRoom(username: string): IUser | undefined {
        // update room

        // return room update
        let room : Room | undefined = this.rooms.getRoomWithUsername(username);
        
        room?.leaderboardAdd(username);
        
        return this.users.setUserDead(username);
    }

  
    getUserWithId(userId: string): IUser | undefined {
        let user: User | undefined = this.users.getWithId(userId);

        if (user === undefined)
            return (undefined);

        return (user.getInfo());
    }

    createRoom(room: IRoom) {
        this.rooms.addRoom(room);
    }
    leaveRoom(username : string) :boolean {        
        this.users.resetUser(username);
        // delete room if no moore user i nit
        let roomIsDelete = this.rooms.deleteUser(username);
        return roomIsDelete;
    }

    getAllEntity(): ({ rooms: IRoom[], users: IUser[] }) {
        let allRooms = this.rooms.gets();
        let allUsers = this.users.getUsers();
        // replace 

        return ({
            rooms: allRooms,
            users: allUsers,
        });
    }

    generateAllRoomRunningShadows() :IShadowRoom[] | undefined {
        console.log('Try send data each x seconds');
    
        console.log('Send new shadow for every RUNING ROOM');
        //let roomActif = global.rooms.rooms.filter(_room => _room.state === ERoomState.RUNING_GAME);
        let roomRunning : IRoom[] | undefined = this.rooms.getRunningRooms();
        
        if (roomRunning === undefined || roomRunning.length === 0)
        {
            console.log('No room running')
            return (undefined);
        }
        let reEncodeData = roomRunning.map(_room  => {
            // tramsform room userlist in saveTetriBoard
            let data = _room?.userList.map(_user => {
                // find saveTetriBoard for each user
                return {
                    username: _user.username,
                    shadow: this.users.getUser(_user.username)?.saveTetriBoard
                }
            });
            return ({
                roomname: _room.name,
                shadows: data
            });
        });
        return (reEncodeData);
    }
}