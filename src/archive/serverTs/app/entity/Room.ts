import { v4 as uuidv4 } from 'uuid';

export interface IRoom {
    uuid : string,
    name : string,
    ownerUuid : string,
}

export interface IRoomList {
    roomList : IRoom[];
    uuid : string;
}

//One of the most common uses of interfaces in languages like C# and Java, that of explicitly enforcing that a class meets a particular contract, is also possible in TypeScript.
export class Room implements IRoom{
    public name;
    public ownerUuid;
    public uuid;

    constructor(raw: Partial<Room> = {}) {
        this.name = raw.name || '';
        this.ownerUuid = raw.ownerUuid || '';
        this.uuid = uuidv4();
    }
}

export class RoomList implements IRoomList {
    public roomList;
    public uuid;

    constructor(raw: Partial<RoomList> = {}) {
        this.roomList = raw.roomList || [];
        this.uuid = uuidv4();
    }

    public add(room : IRoom): void{
        let newRoom = new Room(room);
        this.roomList.push(newRoom);        
        return newRoom.uuid;
    }

    public getRoom(uuid : string) : IRoom | any {
        let room = this.roomList.filter(r => r.uuid === uuid);

        if (room.length === 0 || room.length > 1)
            return null;
        return room[0];
    }
    
    public getAllRoom() {
        return this.roomList;
    }

    public remove(uuid) : boolean{
        this.roomList = this.roomList.filter(room => room.uuid === uuid);
        return (true);
    }

    public removeAll() {
        this.roomList = [];       
    }
}