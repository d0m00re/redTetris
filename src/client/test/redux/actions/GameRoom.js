import * as actions from './../../../src/redux/actions/GameRoom';
import * as types from  './../../../src/redux/Constant/GameRoom';

const assert = require('assert');

describe('Actions : Game Room', () => {
  it ('Restore init state', () => {
      const expectedAction = {type : types.GAME_ROOM_INIT_STATE};

      assert.deepEqual(expectedAction, actions.setInitState());
  });

  it ('Set current game room', () => {
    let room = {
        leaderboard : [],
        name: 'room',
        owner : 'jack',
        state : 'WAIT_USER',
        userList: [{username : 'jack', score : 0}],
        uuid : 0
    }

    const expectedAction = {
        type : types.SET_GAME_ROOM,
        payload : room
    }

    assert.deepEqual(expectedAction, actions.setGameRoom(room));
  });

  it ('Reset game room', () => {
    const expectedAction = {
        type : types.GAME_ROOM_RESET
    };

    assert.deepEqual(expectedAction, actions.gameRoomReset());
  });

  it('Update adv shadow', () => {
    const payload  = {
        shadows : [
            {
                username : 'john',
                shadow : Array(20).fill().map(() => Array(10).fill(0))
            },
            {
                username : 'jack',
                shadow : Array(20).fill().map(() => Array(10).fill(1))
            }
        ]
    };

    const expectedAction = {
        type : types.GAME_ROOM_UPD_SHADOW,
        payload : payload.shadows
    }

    assert.deepEqual(expectedAction, actions.gameRoomUpdateShadow(payload));
  })
}) 