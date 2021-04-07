import * as actions from '../../../src/redux/actions/GeneralSocketInfo';
import * as types from '../../../src/redux/Constant/GeneralSocketInfo';

describe('Actions : General socket info Actions', () => {
    test('Restore room and user (play again)', () => {


        const expectedAction = {
            type: types.RESET_ROOM_AND_USER,
            payload: { roomName: 'r1' }
        };

        expect(expectedAction).toEqual(actions.resetRoomAndUser('r1'));
    });

    test('DELETE User from user list', () => {


        const expectedAction = {
            type: types.DELETE_USER_FROM_USERLIST,
            payload: 'user1'
        };

        expect(expectedAction).toEqual(actions.deleteUserFromUserlist('user1'));
    });

    test('Delete room', () => {


        const expectedAction = {
            type: types.DELETE_ROOM,
            payload: 'room1'
        };

        expect(expectedAction).toEqual(actions.deleteRoom('room1'));
    });

    test('Set rooms', () => {
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

        expect(expectedAction).toEqual(actions.setRooms(room));
    });

    test('Set list users', () => {
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

        expect(expectedAction).toEqual(actions.setListUsers(listUser));
    });

    test('Add room', () => {
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

        expect(expectedAction).toEqual(actions.addRoom(room));
    });

    test('Patch list room', () => {
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

        expect(expectedAction).toEqual(actions.patchListRoom({room : room}));
    });

    test('Patch user', () => {
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

        expect(expectedAction).toEqual(actions.patchUser(user));
    });
});