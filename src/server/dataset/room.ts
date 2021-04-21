import {IRoom, ERoomState} from '@entity/Room';

export const room1_wait_1user : IRoom = {
    name: 'room1',
    uuid: '',
    userList: [{username : 'd0m', score : 0}],
    owner: 'd0m',
    state: ERoomState.WAIT_USER,
    leaderboard : []
};

export const room1_wait_2users : IRoom = {
    name: 'room1',
    uuid: '',
    userList: [{username : 'd0m', score : 0}, {username : 'jack', score : 0}],
    owner: 'd0m',
    state: ERoomState.WAIT_USER,
    leaderboard : []
}; 