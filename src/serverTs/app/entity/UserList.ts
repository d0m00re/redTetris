import { v4 as uuidv4 } from 'uuid';
import {IUser, User} from './User';

export interface IUserList{
    uuid : string;
    list : User[];
}

export class UserList implements IUserList {
    public uuid : string;
    public list : User[];

    constructor(raw: Partial<UserList> = {}) {
        this.uuid = uuidv4();
        this.list = [];
    }

    // add
    public pushOne(user : IUser) : string {
        let tmpUser = new User(user);

        this.list.push(tmpUser);
        return (tmpUser.uuid);
    }

    //remove
    public deleteOne(uuid : string) : boolean {
        let len = this.list.length;
        this.list = this.list.filter(elem => elem.uuid !== uuid);
    
        return (len !== this.list.length);
    }

    //update

    //find
    public findOne(uuid : string) : User | any {
        let user = this.list.find(elem=> elem.uuid === uuid);
        return user || {};
    }

    public findAll() : User[] {
        return this.list;
    }
}