import { stringify } from "querystring";

export interface IUser {
    name: string;
    room: string;
    uuid: string;
}

export class User {
    name: string;
    room: string;
    uuid: string;

    constructor({name, room, uuid} : IUser){
        this.name = name;
        this.room = room;
        this.uuid = uuid;
    }
}

export class UserList {
    users : User[];

    constructor() {
        this.users = [];
    }

    add(name : string) {
        let newUser  = new User({name : name, room : '', uuid : ''});
        this.users.push(newUser);
    }

    delete(name : string) {
        this.users = this.users.filter(user => user.name !== name);
    }

    patch(name : string, user : IUser) {
        let tmpUser : IUser = this.users.filter(user => user.name === name)[0];
        tmpUser = user;
    }
}