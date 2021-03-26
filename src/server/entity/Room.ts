import diffString from './../utils/diffString';
 
export enum ERoomState {
  WAIT_USER = 'WAIT_USER',
  RUNING_GAME = 'RUNING_GAME',
  END_GAME = 'END_GAME',
}

export interface IScore {
  username : string;
  score : number;
}

export interface IRoom {
  name: string;
  uuid: string;
  userList: IScore[];
  //userList: string[]; //userList : IScore
  owner: string;
  state: ERoomState;
  leaderboard : IGameLeaderboard[];
}

export interface IRoomConstructor {
  name: string;
  owner: string;
}

export interface IGameLeaderboard {
  username : string;
  score : number;
}

export class Room {
  name: string;
  uuid: string;
  userList: IScore[];
  owner: string;
  state: ERoomState;
  leaderboard : IGameLeaderboard[];

  constructor({ name, owner }: IRoomConstructor) {
    this.name = name;
    this.uuid = '';
    this.userList = [{username : owner, score : 0}];
    this.owner = owner;
    this.state = ERoomState.WAIT_USER;
    this.leaderboard = [];
  }

  /*
  ** leaderboard management
  */

  leaderboardReset() {
    this.leaderboard = [];
  }

  leaderboardAdd(user : IGameLeaderboard) {
    this.leaderboard.unshift(user);
  }

  //-----------------------------

  emptyUserList(): boolean {
    return this.userList.length === 0;
  }

  addUser(name: string): boolean {
    if (this.userList.findIndex(({username}) => username === name) !== -1)
      return false;
    this.userList.push({username : name, score : 0});
    return true;
  }

  // delet euse rfrom user list
  deleteUser(username: string): void {
    this.userList = this.userList.filter(_user => _user.username !== username);
    if (this.owner === username && this.userList.length > 0)
      this.owner = this.userList[0].username;    
  }

  removeUser(name: string): boolean {
    let lenOri = this.userList.length;

    if (lenOri === 0)
      return false;

    if (name === this.owner)
      this.owner = '';
    this.userList = this.userList.filter(_name => _name.username !== name);
    return lenOri === this.userList.length;
  }

  run(): void {
    this.state = ERoomState.RUNING_GAME;
  }

  stop(): void {

    // multiplier case
    if (this.userList.length !== this.leaderboard.length)
    {
      // find winner and add it to the leaderboard
      //let winner = this.userList.filter(_user => _user.filter(elem => elem));
      let win = diffString(this.userList.map(({username}) => username), this.leaderboard.map(elem => elem.username))?.[0];

      if (win) {
        this.leaderboardAdd({username : win, score : 679});
      }
    }

    console.log('Final leaderboard\n');
    console.log(this.leaderboard);    
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
      state: this.state,
      leaderboard : this.leaderboard
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
    return (room.userList.findIndex(_username => _username.username === username) !== -1);
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
    let roomId = this.rooms.findIndex(room => this.containUsername(room, username));

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