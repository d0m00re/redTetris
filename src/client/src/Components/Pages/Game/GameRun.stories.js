import React from 'react';
import GameRun from './GameRun';

const Template = (args) => <GameRun {...args} />

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
let userListRoom = [{username : 'd0m', score : 55}, {username : 'jack', score : 15}, {username : 'john', score : 5}]//['d0m', 'jack', 'john'];
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
let userListServer = [
    {name : 'd0m',  room : 'room1', uuid : 'gfdgf', alive : true, saveTetriBoard : newTmpMap},
    {name : 'jack', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'john', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
];

let userListDeath= ['jack'];

//export const SoloPlayer = Template.bind({});
export const BasicCase = Template.bind({});
export const ExtremCase = Template.bind({});
export const UserDeath = Template.bind({});

BasicCase.args = {
    newTmpMap : newTmpMap,
    tetriList : tetriList,
    userListRoom : userListRoom, 
    user : user,
    userListServer : userListServer,
    noGameLoop : true,
    userListDeath : userListDeath
}





    //--------------------------------
/*
newTmpMap, tetriList, userList, user, userlist
*/

let tetriList2 = [tetri1, tetri1, tetri1];
//let userListRoom2 = ['d0m', 'jack', 'john', 'miaou', 'master', 'hater', 'xRambo'];
let userListRoom2 = [{username : 'd0m', score : 55}, {username : 'jack', score : 55},
                    {username : 'john', score : 55}, {username : 'miaou', score : 55},
                    {username : 'master', score : 55}, {username : 'hater', score : 55},
                    {username : 'xRambo', score : 55}]
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
let userListServer2 = [
    {name : 'd0m',  room : 'room1', uuid : 'gfdgf', alive : true, saveTetriBoard : newTmpMap},
    {name : 'jack', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'john', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
    {name : 'miaou', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'master', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
    {name : 'hater', room : 'room1', uuid : 'erte', alive : true, saveTetriBoard : newTmpMap},
    {name : 'xRambo', room : 'room1', uuid : 'dfg', alive : true, saveTetriBoard : newTmpMap},
];

ExtremCase.args = {
    newTmpMap : newTmpMap,
    tetriList : tetriList2,
    userListRoom : userListRoom2,
    user : user2,
    userListServer :userListServer2,
    noGameLoop : true
}


UserDeath.args = {
    newTmpMap : newTmpMap,
    tetriList : tetriList2,
    userListRoom : userListRoom2,
    user : user2,
    userListServer :userListServer2,
    noGameLoop : true,
    userListDeath : ['d0m', 'john', 'master', 'xRambo']
}

const Info = {
    title : 'Pages/GameRun'
} 


export default Info; 