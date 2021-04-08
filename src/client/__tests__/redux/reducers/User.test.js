import * as actions from './../../../src/redux/actions/User';
import reducer, {initialState} from './../../../src/redux/reducers/User';

describe('User reducer', () => {
    test('should return the initial state', () => {
        let expectedValue = initialState;
        
        expect(reducer(undefined, {})).toEqual(expectedValue);
    });
    test('should handle SET_USERNAME_FORM', () => {
        let expectedValue = {...initialState, usernameForm : 'user1'};

        expect(reducer(undefined, actions.setUsernameForm('user1'))).toEqual(expectedValue);
    });
    test('should handle SET_ROOMNAME_FORM', () => {
        let expectedValue = {...initialState, roomnameForm : 'room1'};

        expect(reducer(undefined, actions.setRoomnameForm('room1'))).toEqual(expectedValue);
    });
    test('should handle SET_USERNAME', () => {
        let expectedValue = {...initialState, username : 'user1'};

        expect(reducer(undefined, actions.setUsername({username : 'user1'}))).toEqual(expectedValue);
    });
    test('should handle SET_IS_CONNECT', () => {
        let expectedValue = {...initialState, isConnect : true};

        expect(reducer(undefined, actions.setIsConnected(true))).toEqual(expectedValue);
    });
    test('should handle SET_USER_ALIVE', () => {
        let expectedValue = {...initialState, alive : true};

        expect(reducer(undefined, actions.setUserAlive(true))).toEqual(expectedValue);
    });
});