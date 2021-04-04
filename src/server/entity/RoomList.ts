
import {IScore, IRoom, IRoomConstructor, Room, ERoomState} from './Room';

export class RoomList{
    rooms: Room[];
   
    constructor() {  
      this.rooms = [];
    }
  
    getRunningRooms() : IRoom[] | undefined {
      return this.rooms.filter(_room => _room.state === ERoomState.RUNING_GAME);
    }
  
    add({ name, owner }: IRoomConstructor) {
      let newUser = new Room({ name, owner });
      this.rooms.push(newUser);
    }
  
    addUser(roomName: string, userName: string): void {
      let room = this.rooms.filter(room => room.name === roomName)
      if (room.length === 1)
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
  
    incrUserScore(roomname : string, username : string, nbLineDelete : number) {
      let index = this.rooms.findIndex(room => room.name === roomname)
  
      if (index !== -1)
        this.rooms[index].incrUserScore(username, nbLineDelete);
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