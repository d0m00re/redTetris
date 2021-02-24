import { IUser } from './User';

export enum ERoomState {
  WAIT_USER = 'WAIT_USER',
  RUNING_GAME = 'RUNING_GAME',
  END_GAME = 'END_GAME',
}

export interface IMsg {
  username : string;
  date : string;
  msg : string;
}

export interface IRoom {
  name: string;
  uuid: string;
  userList: string[];
  msgList: IMsg[];
  owner: IUser;
  state: ERoomState;
}


export class Room {
  name: string;
  uuid: string;
  userList: string[];
  msgList: IMsg[];
  owner: IUser;
  state: ERoomState;

  constructor(name : string, owner : IUser) {
    this.name = name;
    this.uuid = '';
    this.userList = [];
    this.msgList = [];
    this.owner = owner;
    this.state = ERoomState.WAIT_USER;
  }
}

export class RoomList {
  rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  add(name: string, owner: IUser) {
    let newUser = new Room(name, owner);
    this.rooms.push(newUser);
  }

  addUser(roomName : string, userName : string): void {
    let room = this.rooms.filter(room => room.name === roomName)
    room[0].userList.push(userName); // = userName;
  }

  addRoom(room : IRoom) {
    console.log('****add a room : ');
    console.log(room);
    
    
    this.rooms.push(room);
  }

  delete(name: string) {
    this.rooms = this.rooms.filter(user => user.name !== name);
  }
/*
  patch(name: string, user: IUser) {
S    if (index !== -1) {tq
      this.rooms[index] = user;
    }
  }
*/
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
    console.log('getWithName : ' + name);
    
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
    console.log('ROOM EXIST');
    console.log(this.rooms.filter(room => room.name === name).length === 1);
    
    
    if (this.rooms.filter(room => room.name === name).length === 1)
      return true;
    return false;
  }

  gets(): Room[] {
    return this.rooms;
  }

  //------------ manage message
  addMessage({msg, username} : {msg : string, username : string}) {
    // 
  }
}