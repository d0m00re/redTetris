import { IUser, UserList } from './User';

export enum ERoomState {
  WAIT_USER = 'WAIT_USER',
  RUNING_GAME = 'RUNING_GAME',
  END_GAME = 'END_GAME',
}

export interface IRoom {
  name: string;
  uuid: string;
  userList: string[];
  owner: string;
  state: ERoomState;
}

export interface IRoomConstructor {
  name : string;
  owner : string;
}

export class Room {
  name: string;
  uuid: string;
  userList: string[];
  owner: string;
  state: ERoomState;

  constructor({name, owner} : IRoomConstructor) {
    this.name = name;
    this.uuid = '';
    this.userList = [owner];
    this.owner = owner;
    this.state = ERoomState.WAIT_USER;
  }

  getInfo() : IRoom {
    return ({
      name : this.name,
      uuid : this.uuid,
      userList : [...this.userList],
      owner : this.owner,
      state : this.state
    })
  }

}

export class RoomList {
  rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  add({name, owner} : IRoomConstructor) {
    let newUser = new Room({name, owner});
    this.rooms.push(newUser);
  }

  addUser(roomName : string, userName : string): void {
    let room = this.rooms.filter(room => room.name === roomName)
    room[0].userList.push(userName); // = userName;
  }

  addRoom(room : IRoom) {
    console.log('****add a room : ');
    console.log(room);
    
    
    this.rooms.push(new Room(room));
  }

  delete(name: string) {
    this.rooms = this.rooms.filter(user => user.name !== name);
  }

  get(name: string): Room | undefined {
    return this.rooms.filter(room => room.name === name)[0];
  }

  setStatus(name : string, status : ERoomState) : boolean {
    let tmp = this.getWithName(name);
    if (tmp !== undefined)
    {
      tmp.state = status;
      return true;
    }
    else
    {
      return false;
    }
  }

  run(name : string) : boolean {
    return this.setStatus(name, ERoomState.RUNING_GAME);
  }

  stop(name : string) : boolean {
    return this.setStatus(name, ERoomState.END_GAME);
  }

  restart(name : string) : boolean {
    return this.setStatus(name, ERoomState.WAIT_USER);
  }

  getWithName(name: string): Room | undefined {    
    return this.rooms.filter(room => room.name === name)[0];
  }

  //find room with username
  containUsername(room : IRoom, username : string) {
    return (room.userList.findIndex(_username  => _username === username) !== -1);
  }

  // find room name with username
  getRoomNameWithUsername(username : string) : string {
    let roomId = this.rooms.findIndex(room => this.containUsername(room, username));

    if (roomId === -1)
      return '';
    return this.rooms[roomId].name;
  }

  roomExist(name: string): boolean {
    if (this.rooms.filter(room => room.name === name).length === 1)
      return true;
    return false;
  }

  gets(): Room[] {
    return this.rooms;
  }
}