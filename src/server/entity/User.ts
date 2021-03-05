export interface IUser {
    name: string;
    room: string;
    uuid: string;
    isAlive ?: boolean;
    saveTetriBoard ?: number[][]    
} 

export class User {
    name: string;
    room: string;
    uuid: string;
    isAlive ?: boolean;
    saveTetriBoard ?: number[][];

    constructor({name, room, uuid} : IUser){
        this.name = name;
        this.room = room;
        this.uuid = uuid;
        this.isAlive = true;
        this.saveTetriBoard = Array(20).fill([]).map(() => Array(10).fill(0))
    }

    getInfo() : IUser {
        return ({
            name : this.name,
            room : this.room,
            uuid : this.uuid,
            isAlive : this.isAlive,
            saveTetriBoard : this.saveTetriBoard
        })
    }
}

export class UserList {
    users : User[];

    constructor() {
        this.users = [];
    }

    findIndexWtUsername(username : string) : number {
        return this.users.findIndex(({name}) => name === username);
    }

    setUserDead(username : string) : IUser | undefined {
        let index = this.findIndexWtUsername(username);

        if (index === -1)
            return undefined;

        this.users[index].isAlive = false;

        return this.users[index].getInfo();
    }

    setSaveTetriBoard(username : string , saveTetriBoard : number[][]) : IUser | undefined {
        let index = this.findIndexWtUsername(username);

        if (index === -1)
            return (undefined);

        this.users[index].saveTetriBoard = saveTetriBoard;

        return this.users[index].getInfo();
    }

    /*
    setUserAlive(username : string) {

    }
    */

    add(name : string) {
        let newUser  = new User({name : name, room : '', uuid : ''});
        this.users.push(newUser);
    }

    addUser(user : IUser) {
       this.users.push(new User(user));
    }

    delete(name : string) {
        this.users = this.users.filter(user => user.name !== name);
    } 

    patch(name : string, user : IUser) {
        let index = this.users.findIndex(user => user.name === name);
        if (index !== -1){
            this.users[index] = new User(user);
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