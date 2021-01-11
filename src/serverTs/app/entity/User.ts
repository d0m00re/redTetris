import { v4 as uuidv4 } from 'uuid';

export interface IUser{
    uuid : string;
    name : string;
    roomUuid : string;
}

export class User implements IUser {
    public uuid : string;
    public name : string;
    public roomUuid : string;

    constructor(raw: Partial<User> = {}) {
        this.uuid = uuidv4();
        this.name = raw.name || '';
        this.roomUuid = '';
    }

    public userInfo() : IUser {
        return({
            uuid : this.uuid,
            name : this.name,
            roomUuid : this.roomUuid        
        })}

    public setRoom(uuid : string): void {
        this.uuid = uuid;
    }

    public setName(name : string): void {
        this.name = name;
    }
}