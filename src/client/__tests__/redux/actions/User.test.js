import * as actions from '../../../src/redux/actions/User';
import * as types from '../../../src/redux/Constant/User';

const assert = require('assert');

describe('User Actions', () => {
    test('should create an action to indicate that this user is logged in to the backend', () => {

        const expectedAction = {
            type : types.SET_IS_CONNECT,
            payload : true
        };       

        assert.deepEqual(actions.setIsConnected(), expectedAction);
    });

    test('user error set', () => {
        const msg = 'big error';
        const expectedAction = {
            type : types.SET_ERROR,
            payload : {error : true, errorMsg : msg}
        };

        assert.deepEqual(actions.setError({errorMsg : msg}), expectedAction);
    });

    test('set username', () => {
        const username = {username : 'user1'};
        const expectedAction = {
            type : types.SET_USERNAME,
            payload : username.username
        };

        assert.deepEqual(actions.setUsername(username), expectedAction);
    });

    test('set userform form', () => {
        const username = 'user1';
        const expectedAction = {
            type : types.SET_USERNAME_FORM,
            payload : username
        };

        assert.deepEqual(actions.setUsernameForm(username), expectedAction);
    });

    test('set roomname form', () => {
        const roomName = 'room0';
        const expectedAction = {
            type : types.SET_ROOMNAME_FORM,
            payload : roomName
        };

        assert.deepEqual(actions.setRoomnameForm(roomName), expectedAction);
    });

    test('set user alive', () => {
        const expectedAction = {
            type : types.SET_USER_ALIVE,
            payload : true
        };

        assert.deepEqual(actions.setUserAlive(true), expectedAction);
    });

    test('set user death', () => {
        const expectedAction = {
            type : types.SET_USER_ALIVE,
            payload : false
        };

        assert.deepEqual(actions.setUserAlive(false), expectedAction);
    });
})