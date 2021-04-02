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
  leaderboard : IScore[];
}

export interface IRoomConstructor {
  name: string;
  owner: string;
}

const score : {[id : number] : number}  = {
  0 : 0,
  1 : 100,
  2 : 300,
  3 : 1200
}
 
export class Room implements IRoom{
  name: string; 
  uuid: string;
  userList: IScore[]; //
  owner: string;
  state: ERoomState;
  leaderboard : IScore[]; // save leaderboad score

  constructor({ name, owner }: IRoomConstructor) {
    this.name = name;
    this.uuid = ''; 
    this.userList = [{username : owner, score : 0}];
    this.owner = owner;
    this.state = ERoomState.WAIT_USER;
    this.leaderboard = [];
  }

  /*
** incr score
  */
  incrUserScore(username : string, nbLineDelete : number) : boolean {
    let id = this.userList.findIndex(user => user.username === username);
    let scoreAdd = score[nbLineDelete];
    if (id === -1 || scoreAdd === undefined)
      return (false);
  
    this.userList[id].score = this.userList[id].score + scoreAdd;
    return (true);
  }

  /*
  ** leaderboard management
  */

  leaderboardReset() {
    this.leaderboard = [];
  }

  leaderboardAdd(user : string) {
    let data : IScore | undefined = this.userList.find(_user => _user.username === user);

    if (data === undefined)
      return ;
    this.leaderboard.unshift(data);
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
      let win = diffString(this.userList.map(({username}) => username), this.leaderboard.map((_lead) => _lead.username));

      if (win) {
        this.leaderboardAdd(win[0]);
      }
    }

    console.log('Final leaderboard\n'); 
    console.log(this.leaderboard);    
    this.state = ERoomState.END_GAME;
  }

  restart(): void {
    this.userList = this.userList.map(_user => ({username : _user.username, score : 0}));
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
 