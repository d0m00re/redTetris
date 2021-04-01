import * as actions from './../../src/redux/actions/User';
import * as types from './../../src/redux/Constant/User';

const assert = require('assert');

//const {SET_IS_CONNECT} =  require('./../../src/redux/Constant/User');
//const {setIsConnected} = require('./../../src/redux/actions/User');

describe('actions User', () => {
    it('should create an action to indicate that this user is logged in to the backend', () => {

        const expectedAction = {
            type : types.SET_IS_CONNECT,
            payload : true
        };       

       // expect(actions.setIsConnected()).toEqual(expectedAction);
        assert.deepEqual(actions.setIsConnected(), expectedAction);
    })
})