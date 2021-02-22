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

    addUser(user : IUser) {
        this.users.push(user);
    }

    delete(name : string) {
        this.users = this.users.filter(user => user.name !== name);
    }

    patch(name : string, user : IUser) {
        let index = this.users.findIndex(user => user.name === name);
        if (index !== -1){
            this.users[index] = user;
        }
    } 

    getUser(name : string) : User | undefined {
        return this.users.filter(user => user.name === name)[0];
    }

    getUsers() : User[] {
        return this.users;
    }

    getWithId(id : string) : User {
        return this.users.filter(user => user.uuid === id)[0];
    }

}