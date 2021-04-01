import * as actions from './../../src/redux/actions/User';
import * as types from './../../src/redux/Constant/User';

const assert = require('assert');

//const {SET_IS_CONNECT} =  require('./../../src/redux/Constant/User');
//const {setIsConnected} = require('./../../src/redux/actions/User');

describe('User Actions', () => {
    it('should create an action to indicate that this user is logged in to the backend', () => {

        const expectedAction = {
            type : types.SET_IS_CONNECT,
            payload : true
        };       

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setIsConnected(), expectedAction);
    });

    it ('user error set', () => {
        const msg = 'big error';
        const expectedAction = {
            type : types.SET_ERROR,
            payload : {error : true, errorMsg : msg}
        };

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setError({errorMsg : msg}), expectedAction);
    });

    it ('set username', () => {
        const username = {username : 'user1'};
        const expectedAction = {
            type : types.SET_USERNAME,
            payload : username.username
        };

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setUsername(username), expectedAction);
    });

    it ('set userform form', () => {
        const username = 'user1';
        const expectedAction = {
            type : types.SET_USERNAME_FORM,
            payload : username
        };

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setUsernameForm(username), expectedAction);
    });

    it ('set roomname form', () => {
        const roomName = 'room0';
        const expectedAction = {
            type : types.SET_ROOMNAME_FORM,
            payload : roomName
        };

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setRoomnameForm(roomName), expectedAction);
    });

    it ('set user alive', () => {
        const expectedAction = {
            type : types.SET_USER_ALIVE,
            payload : true
        };

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setUserAlive(true), expectedAction);
    });

    it ('set user death', () => {
        const expectedAction = {
            type : types.SET_USER_ALIVE,
            payload : false
        };

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setUserAlive(false), expectedAction);
    });
})