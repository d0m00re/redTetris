import GameReducer from '../reducers/Game';
import GeneralSocketInfoReducer from '../reducers/GeneralSocketInfo';
import UserReducer from '../reducers/User';
import GameRoomReducer from '../reducers/GameRoom';

import { combineReducers, createStore } from 'redux';


export const defaultState = {
    game : GameReducer,
    generalSocketInfo : GeneralSocketInfoReducer,
    user : UserReducer,
    gameRoom : GameRoomReducer
};

let mapSample = Array(20).fill().map((() => Array(10).fill(0)));
let tetriListSample = [
  {shape : [[
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ],
  [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]    
  ]], color : 'yellow'},
  {shape : [[
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
  ],
  [
    [0,0,0,0],
    [1,1,1,1],
    [0,0,0,0],
    [0,0,0,0]    
  ]], color : 'red'}   
];
const reducersRunningGame = combineReducers(defaultState, {
    game : {
        username : 'd0m',
        roomname : 'room1',
        currRotation : 0,
        posTetriminos : {x : 3, y : 3},
        currMap : mapSample,
        tetriList :  tetriListSample,
        nbLineBlock : 5,
        score : 1000
    },
    generalSocketInfo : {
        socket : undefined,
        roomList : [{
            name : 'room1',
            uuid : '',
            userList : [
                {username : 'd0m', score : 1000},
                {username : 'jack', score : 500},
                {username : 'john', score : 250}],
            owner : 'd0m',
            state : 'WAIT_USER',
            leaderboard : []
        }],
        userlist : [
            {
                name : 'd0m',
                room : 'room1',
                uuid : 'fake',
                alive : true,
                saveTetriBoard : tetriListSample
            },
            {
                name : 'jack',
                room : 'room1',
                uuid : 'fake',
                alive : true,
                saveTetriBoard : tetriListSample
            },
            {
                name : 'john',
                room : 'room1',
                uuid : 'fake',
                alive : false,
                saveTetriBoard : tetriListSample
            }
        ]
    },
    user : {
        usernameForm : '',
        roomnameForm : '',
        username : 'd0m',
        isConnect : true,
        alive : true
    },
    gameRoom : {
        name : 'room1',
        uuid : '',
        userList : [],
        owner : 'd0m',
        state : 'WAIT_USER',
        leaderboard : [],
        shadows : [{username : 'd0m', shadow : tetriListSample},
                    {username : 'jack',  shadow : tetriListSample},
                    {username : 'john',  shadow : tetriListSample}]
    }
});


function configureStore(initialState = {}) {
    const store = createStore(reducersRunningGame);

    return (store);
};

let store = configureStore();
export default store;