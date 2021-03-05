import { UserList, IUser, User } from './User';
import { IRoom, RoomList, ERoomState } from './Room';

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

    createUser(user: IUser) {
        this.users.addUser(user);
    }

    setSaveTetriBoard(username : string , saveTetriBoard : number[][]) : IUser | undefined {
        return this.users.setSaveTetriBoard(username, saveTetriBoard);
    }



      //user dead
    setUserDeadInRoom(username : string) : IUser | undefined {
        // update room

        // return room update
        return this.users.setUserDead(username);
    }

    deleteUser(username: string) {

    }

    getUserWithId(userId : string) : IUser | undefined {
        let user : User = this.users.getWithId(userId);

        if (user === undefined)
            return (undefined);

        return (user.getInfo());
    }

    createRoom(room: IRoom) {
        this.rooms.addRoom(room);
    }

    deleteRoom(username: string) {

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
}