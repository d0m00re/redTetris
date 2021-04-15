import keyboardAdapter from './../../src/Components/hook/keyboardAdapter';

const tetriListSample = [
    {
        shape: [[
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]], color: 'yellow'
    },
    {
        shape: [[
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]], color: 'red'
    }
];

const gameRoom = { 
    name: 'room1',
    uuid: '',
    userList: [],
    owner: 'd0m',
    state: 'RUNING_GAME',
    leaderboard: [{ roomname: 'john', score: 250 }],
    shadows: [{ username: 'd0m', shadow: tetriListSample },
    { username: 'jack', shadow: tetriListSample },
    { username: 'john', shadow: tetriListSample }]
}

const gameState = {
    currRotation : 0,
    posTetriminos : {x : 5, y : 5},
    currMap : Array(20).fill().map(() => Array(10).fill(0))
}

const dataMine = { 
    action: 'rotate',
    room: gameRoom,
    alive: true,
    tetriList: tetriListSample,
    gameState: gameState
}


describe('keyboardAdapter', () => {
    test('Not Alive', () => {
        let ret = keyboardAdapter(() => { }, { action: '', room: '', alive: false, tetriList: [], gameState: 'WAIT_USER' });

        expect(ret).toBe(1);
    });

    test('Not RUNING_GAME', () => {
        let ret = keyboardAdapter(() => { }, { action: '', room: '', alive: true, tetriList: [], gameState: 'WAIT_USER' });

        expect(ret).toBe(0);
    });

    test('Action Rotate', () => {
        let data = dataMine;
        let ret = keyboardAdapter(() => { }, data);

        expect(ret).toBe('rotate');
    });

    
    test('Action Right', () => {
        let data = {...dataMine, action : 'right'};
        let ret = keyboardAdapter(() => { }, data);

        expect(ret).toBe('right');
    });

    test('Action Left', () => {
        let data = {...dataMine, action : 'left'};
        let ret = keyboardAdapter(() => { }, data);
        expect(ret).toBe('left');

    });

    test('Action Down', () => {
        let data = {...dataMine, action : 'down'};
        let ret = keyboardAdapter(() => { }, data);

        expect(ret).toBe('down');

    });

    test('Action Space', () => {
        let data = {...dataMine, action : 'space'};
        let ret = keyboardAdapter(() => { }, data);

        expect(ret).toBe('space');

    });

    test('Action Default', () => {
        let data = {...dataMine, action : 'fake'};
        let ret = keyboardAdapter(() => {}, data);

        expect(ret).toBe('none');

    });


})