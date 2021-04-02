import * as actions from './../../src/redux/actions/GeneralSocketInfo';
import * as types from './../../src/redux/Constant/GeneralSocketInfo';

const assert = require('assert');

describe('Actions : General socket info Actions', () => {
    it('Restore room and user (play again)', () => {


        const expectedAction = {
            type: types.RESET_ROOM_AND_USER,
            payload: { roomName: 'r1' }
        };

        assert.deepEqual(expectedAction, actions.resetRoomAndUser('r1'));
    });

    it('DELETE User from user list', () => {


        const expectedAction = {
            type: types.DELETE_USER_FROM_USERLIST,
            payload: 'user1'
        };

        assert.deepEqual(expectedAction, actions.deleteUserFromUserlist('user1'));
    });

    it('Delete room', () => {


        const expectedAction = {
            type: types.DELETE_ROOM,
            payload: 'room1'
        };

        assert.deepEqual(expectedAction, actions.deleteRoom('room1'));
    });

    it('Set rooms', () => {
        const room = [{
            leaderboard: [],
            name: 'room1',
            owner: 'jack',
            state: 'WAIT_USER',
            userList: [{ username: 'jack', score: 0 }],
            uuid: 0
        }]

        const expectedAction = {
            type: types.SET_ROOMS,
            payload: room
        };

        assert.deepEqual(expectedAction, actions.setRooms(room));
    });

    it('Set list users', () => {
        const user = {
            alive : true,
            name : 'u1',
            room: 'room1',
            saveTetriBoard: Array(20).fill().map(() => Array(10).fill(0)),
            uuid : 0
        }

        const user2 = {
            alive : true,
            name : 'u2',
            room: '',
            saveTetriBoard: Array(20).fill().map(() => Array(10).fill(0)),
            uuid : 0
        }

        const listUser = [user, user2];

        const expectedAction = {
            type: types.SET_LIST_USERS,
            payload: listUser
        };

        assert.deepEqual(expectedAction, actions.setListUsers(listUser));
    });

    it('Add room', () => {
        const room = {
            leaderboard: [],
            name: 'room1',
            owner: 'jack',
            state: 'WAIT_USER',
            userList: [{ username: 'jack', score: 0 }],
            uuid: 0
        };

        const expectedAction = {
            type: types.ADD_ROOM,
            payload: room
        };

        assert.deepEqual(expectedAction, actions.addRoom(room));
    });

    it('Patch list room', () => {
        const room = {
            leaderboard: [],
            name: 'room1',
            owner: 'jack',
            state: 'WAIT_USER',
            userList: [{ username: 'jack', score: 0 }],
            uuid: 0
        };

        const expectedAction = {
            type: types.PATCH_LIST_ROOM,
            payload: room
        };

        assert.deepEqual(expectedAction, actions.patchListRoom({room : room}));
    });

    it('Patch user', () => {
        const user = {
            alive : true,
            name : 'u1',
            room: 'room1',
            saveTetriBoard: Array(20).fill().map(() => Array(10).fill(0)),
            uuid : 0
        }

        const expectedAction = {
            type: types.PATCH_USER,
            payload: user
        };

        assert.deepEqual(expectedAction, actions.patchUser(user));
    });
});