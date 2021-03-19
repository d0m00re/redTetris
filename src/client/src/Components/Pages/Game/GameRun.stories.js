import React from 'react';
import GameRun from './GameRun';

let tetri1 = {
    shape : [[
        [2,0,0],
        [2,2,2],
        [0,0,0],
    ],
    [
        [0,2,2],
        [0,2,0],
        [0,2,0],
    ],
    [
        [0,0,0],
        [2,2,2],
        [0,0,2],
    ],
    [
        [0,2,0],
        [0,2,0],
        [2,2,0],
    ]],
    color : 'orange'
}

/*
newTmpMap, tetriList, userList, user, userlist
*/
let newTmpMap = Array(20).fill([]).map(() => Array(10).fill(0))  

newTmpMap[17] = [...Array(8).fill(2), 0, 0];
newTmpMap[18] = [...Array(9).fill(2), 0];
newTmpMap[19] = Array(10).fill(2);

let tetriList = [tetri1, tetri1, tetri1];
let userList = ['d0m', 'jack', 'john'];
let user = {
    usernameForm: "",
    roomnameForm: "",
    username: "d0m",
    isConnect: true,
    alive: true,
    room : {
        name: "room1",
        uuid: "",
        userList : ["d0m", 'jack', 'john'],
        owner: "d0m",
        state: "RUNING_GAME"
    }
   }
let userlist = [
    {name : 'd0m',  room : 'room1', uuid : 'gfdgf', alive : true, saveTetriBoard : newTmpMap},
    {name : 'jack', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'john', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
];


export const ByDefault = () =>
    <GameRun
        newTmpMap = {newTmpMap}
        tetriList = {tetriList}
        userList = {userList}
        user = {user}
        userlist = {userlist}
        noGameLoop = {true}
    />

    //--------------------------------
/*
newTmpMap, tetriList, userList, user, userlist
*/

let tetriList2 = [tetri1, tetri1, tetri1];
let userList2 = ['d0m', 'jack', 'john', 'miaou', 'master', 'hater', 'xRambo'];

let user2 = {
    usernameForm: "",
    roomnameForm: "",
    username: "d0m",
    isConnect: true,
    alive: true,
    room : {
        name: "room1",
        uuid: "",
        userList : ['d0m', 'jack', 'john', 'miaou', 'master', 'hater', 'xRambo'],
        owner: "d0m",
        state: "RUNING_GAME"
    }
   }
let userlist2 = [
    {name : 'd0m',  room : 'room1', uuid : 'gfdgf', alive : true, saveTetriBoard : newTmpMap},
    {name : 'jack', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'john', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
    {name : 'miaou', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'master', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
    {name : 'hater', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'xRambo', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
];


export const MaxUser = () =>
    <GameRun
        newTmpMap = {newTmpMap}
        tetriList = {tetriList2}
        userList = {userList2}
        user = {user2}
        userlist = {userlist2}
        noGameLoop = {true}
    />



const Info = {
    title : 'Page - Game m - miaou'
} 

export default Info;