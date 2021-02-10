import {IUser} from './User';
import {IRoom, ERoomState} from './Room';

export interface IGlobal {
    users: IUser[];
    rooms: IRoom[];
}