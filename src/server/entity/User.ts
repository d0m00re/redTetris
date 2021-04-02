export interface IUser {
    name: string;
    room: string;
    uuid: string;
    alive ?: boolean;
    saveTetriBoard ?: number[][]    
} 

export class User implements IUser {
    name: string;
    room: string;
    uuid: string;
    alive ?: boolean;
    saveTetriBoard ?: number[][];

    constructor({name, room, uuid} : IUser){
        this.name = name;
        this.room = room;
        this.uuid = uuid;
        this.alive = true;
        this.saveTetriBoard = Array(20).fill([]).map(() => Array(10).fill(0));
    }

    reset() {
        this.alive = true;
        this.saveTetriBoard = Array(20).fill([]).map(() => Array(10).fill(0));
    }

    getInfo() : IUser {
        return ({
            name : this.name,
            room : this.room,
            uuid : this.uuid,
            alive : this.alive,
            saveTetriBoard : this.saveTetriBoard
        })
    }
}