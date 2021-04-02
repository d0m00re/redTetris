import {IUser} from './../entity/User';
import * as dataUser from './user'

export let userListEmpty : IUser[] = [];

export let ul_1user_room1 : IUser[] = [
        dataUser.d0m_room1
]

export let ul_3users_room1 : IUser[] =[
    dataUser.d0m_room1,
    dataUser.u1_room1,
    dataUser.u2_room1
]

export let ul_1user_noroom : IUser[] = [
    dataUser.jackNoRoom
];

export let ul_2users_noroom : IUser[] = [
    dataUser.jackNoRoom,
    dataUser.johnNoRoom
];
