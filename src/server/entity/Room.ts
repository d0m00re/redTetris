import {IUser} from './User';

export enum ERoomState {
    WAIT_USER = 'WAIT_USER',
    RUNING_GAME = 'RUNING_GAME',
    END_GAME = 'END_GAME',
  }
  
export interface IRoom {
    name: string;
    uuid: string;
    userList : IUser[];
    owner : IUser;
    state : ERoomState;
  }