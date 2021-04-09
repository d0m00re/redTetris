import * as actions from './../../../src/redux/actions/GameRoom';
import reducer, {initialState} from './../../../src/redux/reducers/GameRoom';

describe('GameRoom reducer', () => {
    test('should return the initial state', () => {
        let expectedValue = initialState; 

        expect(reducer(undefined, {})).toEqual(expectedValue);
    });

    test('should handle setinitState', () => {
        let expectedValue = initialState;

        expect(reducer(undefined, actions.setInitState())).toEqual(expectedValue);
    });
    
   test('should handle setGameRoom', () => {
        let gameRoom = {
            name : 'room1',
            uuid : '',
            userList : [{username : 'jack', score : 10}, {username : 'Miaou', score : '5'}],
            owner : 'jack',
            state : 'WAIT_USER',
            leaderboard : [],
            shadows : [{username : 'jack', shadow :  Array(20).fill().map(() => Array(10).fill(0))},
                        {username : 'Miaou', shadow :  Array(20).fill().map(() => Array(10).fill(0))}]
        }

        expect(reducer(undefined, actions.setGameRoom(gameRoom))).toEqual(gameRoom);
    });

    test('should gameRoomReset', () => {
        let expectedValue = {...initialState, state : 'WAIT_USER'};

        expect(reducer(undefined, actions.gameRoomReset())).toEqual(expectedValue);

    });

    test('should handle gameRoomUpdShadow', () => {
        let gameRoom = {
            ...initialState,
            shadows : [{username : 'jack', shadow :  Array(20).fill().map(() => Array(10).fill(0))},
                        {username : 'Miaou', shadow :  Array(20).fill().map(() => Array(10).fill(0))}]
        }

        expect(reducer(undefined, actions.gameRoomUpdateShadow({shadows : gameRoom.shadows}))).toEqual(gameRoom);
    });
}); 