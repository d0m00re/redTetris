import * as actions from '../../../src/redux/actions/GameRoom';
import * as types from  '../../../src/redux/Constant/GameRoom';

describe('Actions : Game Room', () => {
  test('Restore init state', () => {
      const expectedAction = {type : types.GAME_ROOM_INIT_STATE};

      expect(expectedAction).toEqual(actions.setInitState());
  });

  test('Set current game room', () => {
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

    expect(expectedAction).toEqual(actions.setGameRoom(room));
  });

  test('Reset game room', () => {
    const expectedAction = {
        type : types.GAME_ROOM_RESET
    };

    expect(expectedAction).toEqual(actions.gameRoomReset());
  });

  test('Update adv shadow', () => {
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

    expect(expectedAction).toEqual(actions.gameRoomUpdateShadow(payload));
  })
}) 