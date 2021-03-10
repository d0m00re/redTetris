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
  name: string;
  owner: string;
}

export class Room {
  name: string;
  uuid: string;
  userList: string[];
  owner: string;
  state: ERoomState;

  constructor({ name, owner }: IRoomConstructor) {
    this.name = name;
    this.uuid = '';
    this.userList = [owner];
    this.owner = owner;
    this.state = ERoomState.WAIT_USER;
  }

  emptyUserList(): boolean {
    return this.userList.length === 0;
  }

  addUser(name: string): boolean {
    if (this.userList.findIndex(_name => _name === name) !== -1)
      return false;
    this.userList.push(name);
    return true;
  }

  // delet euse rfrom user list
  deleteUser(username: string): void {
    this.userList = this.userList.filter(_user => _user !== username);
    if (this.owner === username && this.userList.length > 0)
      this.owner = this.userList[0];
    console.log('---- END');
    console.log(this.getInfo());
    
  }

  removeUser(name: string): boolean {
    let lenOri = this.userList.length;

    if (lenOri === 0)
      return false;

    if (name === this.owner)
      this.owner = '';
    this.userList = this.userList.filter(_name => _name !== name);
    return lenOri === this.userList.length;
  }

  run(): void {
    this.state = ERoomState.RUNING_GAME;
  }

  stop(): void {
    this.state = ERoomState.END_GAME;
  }

  restart(): void {
    this.state = ERoomState.WAIT_USER;
  }

  getInfo(): IRoom {
    return ({
      name: this.name,
      uuid: this.uuid,
      userList: [...this.userList],
      owner: this.owner,
      state: this.state
    })
  }

}

export class RoomList {
  rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  add({ name, owner }: IRoomConstructor) {
    let newUser = new Room({ name, owner });
    this.rooms.push(newUser);
  }

  addUser(roomName: string, userName: string): void {
    let room = this.rooms.filter(room => room.name === roomName)
    room[0].addUser(userName); // = userName;
  }

  //getIndex
  getIndexWithUsername(username: string): number {
    return this.rooms.findIndex(room => this.containUsername(room, username));
  }

  //true : room delete with the user
  // false : room no delete
  deleteUser(username: string): boolean {
    //  let save
    let indexRoom = this.getIndexWithUsername(username);
    if (indexRoom === -1)
      return (false);
    this.rooms[indexRoom]?.deleteUser(username);
    let deleteRoom = this.rooms[indexRoom].emptyUserList();

    if (deleteRoom === true)
      this.rooms.splice(indexRoom, 1);

    return (deleteRoom);
    //  if ()
  }

  addRoom(room: IRoom) {
    this.rooms.push(new Room(room));
  }

  delete(name: string) {
    this.rooms = this.rooms.filter(user => user.name !== name);
  }

  get(name: string): Room | undefined {
    return this.rooms.filter(room => room.name === name)[0];
  }

  setStatus(name: string, status: ERoomState): boolean {
    let tmp = this.getWithName(name);
    if (tmp !== undefined) {
      tmp.state = status;
      return true;
    }
    else {
      return false;
    }
  }
  /*
    setOwner(roomname : string, name : string) : boolean {
  
    }
  */
  run(name: string): boolean {
    return this.setStatus(name, ERoomState.RUNING_GAME);
  }

  stop(name: string): boolean {
    return this.setStatus(name, ERoomState.END_GAME);
  }

  restart(name: string): boolean {
    return this.setStatus(name, ERoomState.WAIT_USER);
  }

  getWithName(name: string): Room | undefined {
    return this.rooms.filter(room => room.name === name)[0];
  }

  //find room with username
  containUsername(room: IRoom, username: string) {
    return (room.userList.findIndex(_username => _username === username) !== -1);
  }

  // find room name with username
  getRoomNameWithUsername(username: string): string {
    let roomId = this.rooms.findIndex(room => this.containUsername(room, username));

    if (roomId === -1)
      return '';
    return this.rooms[roomId].name;
  }

  // find room name with username
  getRoomWithUsername(username: string): Room | undefined {

    console.log('Get room with username : ' + username);


    let roomId = this.rooms.findIndex(room => this.containUsername(room, username));

    console.log('Room id : ' + roomId);


    if (roomId === -1)
      return undefined;
    return this.rooms[roomId];
  }

  getRoomWithRoomName(roomname: string): Room | undefined {
    let room = this.rooms.filter(room => room.name === roomname)

    if (room === undefined || room[0] === undefined)
      return (undefined);
    return room[0];
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