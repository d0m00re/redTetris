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
    {name : 'd0m',  room : 'room1', uuid : 'gfdgf', isAlive : true, saveTetriBoard : newTmpMap},
    {name : 'jack', room : 'room1', uuid : 'erte', isAlive : true, saveTetriBoard : newTmpMap},
    {name : 'john', room : 'room1', uuid : 'dfg', isAlive : true, saveTetriBoard : newTmpMap},
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

export default {
    title : 'Page - Game m - miaou'
} 