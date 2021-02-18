import {UserList} from './User';
import {RoomList, ERoomState} from './Room';

export interface IGlobal {
    users: UserList;
    rooms: RoomList;
}

export class Global {
    users : UserList;
    rooms : RoomList;

    constructor() {
        this.users =  new UserList();
        this.rooms = new RoomList();
    }

    createUser() {

    }

    createRoom() {

    }
}