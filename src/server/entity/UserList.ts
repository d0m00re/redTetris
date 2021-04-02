import {IUser, User} from './User';
export class UserList {
    users : User[];

    constructor() { 
        this.users = [];
    }

    add(name : string) {
        let newUser  = new User({name : name, room : '', uuid : name});
        this.users.push(newUser);
    }

    findIndexWtUsername(username : string) : number {
        return this.users.findIndex(({name}) => name === username);
    }

    setUserDead(username : string) : IUser | undefined {
        let index = this.findIndexWtUsername(username);

        if (index === -1)
            return undefined;

        this.users[index].alive = false;

        return this.users[index].getInfo();
    }

    resetUser(username : string) : undefined | IUser {
        let index = this.findIndexWtUsername(username);

        if (index === -1)
            return undefined;
        this.users[index].reset();
        return this.users[index].getInfo();
    }

    setSaveTetriBoard(username : string , saveTetriBoard : number[][]) : IUser | undefined {
        let index = this.findIndexWtUsername(username);

        if (index === -1)
            return (undefined);

        this.users[index].saveTetriBoard = saveTetriBoard;

        return this.users[index].getInfo();
    }

    addUser(user : IUser) {
       this.users.push(new User(user));
    }

    delete(name : string) {
        this.users = this.users.filter(user => user.name !== name);
    } 

    patch(name : string, user : IUser) : boolean {
        let index = this.users.findIndex(user => user.name === name);
        if (index !== -1){
            this.users[index] = new User(user);
            return true;
        }
        return false;
    } 

    getUser(name : string) : User | undefined {
        return this.users.filter(user => user.name === name)[0];
    }

    getUsers() : User[] {
        return this.users;
    }

    getWithId(id : string) : User | undefined {
        let ret = this.users.filter(user => user.uuid === id);

        if (ret.length !== 1)
            return undefined;

        return ret[0];
    }

}