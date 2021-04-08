import * as actions from './../../../src/redux/actions/GeneralSocketInfo';
import reducer, {initialState} from './../../../src/redux/reducers/GeneralSocketInfo';

export const initialStateWithoutSocket = {
    socket : undefined,
    roomlist : [],
    userlist : [],
};

let userlist = [{
    name : 'u1',
    room : '',
    uuid : 'dsdfs',
    saveTetriBoard :  Array(20).fill([]).map(() => Array(10).fill(2))
},
{
    name : 'u2',
    room : '',
    uuid : 'dddd',
    saveTetriBoard :  Array(20).fill([]).map(() => Array(10).fill(2))
}];

let roomlist = [{
    name : 'room1',
    uuid : 'room1',
    userList : [],
    state : 'WAIT_USER',
    owner : 'user1',
    leaderboard : []
}, {
    name : 'room2',
    uuid : 'room2',
    userList : [],
    state : 'WAIT_USER',
    owner : 'user2',
    leaderboard : []
}];

describe('GeneralSocketInfo Reducer', () => {
    test('should return the initial store', () => {
        let expectedValue = initialState;

        expect(reducer(undefined, {})).toEqual(expectedValue);
    });

    
    test('should handle resetRoomAndUser', () => {
        let expectedValue = initialState;

        expect(reducer(undefined, {})).toEqual(expectedValue);
    });
    
    test('should handle deleteUserFromUserlist', () => {
        let expectedValue = {
                ...initialState,
                userlist : [userlist[0]]
            };

        let state = reducer(undefined, actions.setListUsers(userlist));
        state = reducer(state, actions.deleteUserFromUserlist('u2'));
        expect(state).toEqual(expectedValue);
        state = reducer(state, actions.deleteUserFromUserlist('u1'));
        expect(state).toEqual(state, initialState);
    });

    test('should handle deleteRoom', () => {
        let expectedValue = {
            ...initialStateWithoutSocket,
            roomlist : [roomlist[0]]
        };

        let state = reducer(initialStateWithoutSocket, actions.addRoom(roomlist[0]));
        state = reducer(state, actions.addRoom(roomlist[1]));
        state = reducer(state, actions.deleteRoom(roomlist[1].name));

        expect(state).toEqual(expectedValue);

        state = reducer(state, actions.deleteRoom(roomlist[0].name));

        
        expectedValue = {
            ...initialStateWithoutSocket,
            roomlist : []
        }
        expect(state).toEqual(expectedValue);
        
    });

    test('should handle setRooms', () => {
        let expectedValue = {
            ...initialStateWithoutSocket,
            roomlist : [roomlist[0], roomlist[1]]
        };

        let state = reducer(initialStateWithoutSocket, actions.setRooms(expectedValue.roomlist));
        expect(state).toEqual(expectedValue);
    });

    test('should handle setListUsers', () => {
        let expectedValue = {
            ...initialStateWithoutSocket,
            userlist : userlist
        };

        let state = reducer(initialStateWithoutSocket, actions.setListUsers(userlist));

        expect(state).toEqual(expectedValue);
    });



    test('should handle addRoom', () => {
        let expectedValue = {
            ...initialStateWithoutSocket,
            roomlist : [roomlist[0]]
        };

        let state = reducer(initialStateWithoutSocket, actions.addRoom(roomlist[0]));
        expect(state).toEqual(expectedValue);

        expectedValue = {
            ...initialStateWithoutSocket,
            roomlist : [roomlist[0], roomlist[1]]
        }
        state = reducer(state, actions.addRoom(roomlist[1]));
        expect(state).toEqual(expectedValue);
    });

    test('should handle patchListRooms', () => {
        let payload = {
            name : 'room1',
            uuid : 'room1',
            userList : [],
            state : 'WAIT_USER',
            owner : 'user1',
            leaderboard : []
        };

        let payload2 = {
            name : 'room1',
            uuid : 'room2',
            userList : [],
            state : 'WAIT_USER',
            owner : 'user2',
            leaderboard : []
        };

        let expectedValue = {
            ...initialStateWithoutSocket,
            roomlist : [payload2]
        };

        console.log('go go go');
        let state = reducer(initialStateWithoutSocket, actions.addRoom(payload));
        state = reducer(state, actions.patchListRoom({room : payload2}));
        expect(state).toEqual(expectedValue); 
    });

    test('should handle patchUser', () => {
        /*
let userlist = [{
    name : 'u1',
    room : '',
    uuid : 'dsdfs',
    saveTetriBoard :  Array(20).fill([]).map(() => Array(10).fill(2))
},
{
    name : 'u2',
    room : '',
    uuid : 'dddd',
    saveTetriBoard :  Array(20).fill([]).map(() => Array(10).fill(2))
}];
        */
       let patchUserlist = [{
        name : 'u1',
        room : 'room1',
        uuid : 'dsdfs',
        saveTetriBoard :  Array(20).fill([]).map(() => Array(10).fill(2))
    },
    {
        name : 'u2',
        room : 'room2',
        uuid : 'dddd',
        saveTetriBoard :  Array(20).fill([]).map(() => Array(10).fill(2))
    }];

        let expectedValue = {
            ...initialState,
            userlist : [patchUserlist[0], patchUserlist[1]]
        };

    let state = reducer(undefined, actions.setListUsers(userlist));
    state = reducer(state, actions.patchUser({newUser : patchUserlist[0]}));
    state = reducer(state, actions.patchUser({newUser : patchUserlist[1]}));

    expect(state).toEqual(state, expectedValue);
    });
    
});