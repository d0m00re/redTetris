import fallAlgo from './../../src/Components/hook/fallAlgo';

const tetriListSample = [
    {
        shape: [[
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]], color: 'red'
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
        ]], color: 'yellow'
    }
];

const gameState = {
    currRotation: 0,
    posTetriminos: { x: 5, y: 5 },
    currMap: Array(20).fill().map(() => Array(10).fill(0)),
    tetriList: tetriListSample
}

let data = {
    dispatch: () => { },
    alive: true,
    room: {
        state: 'RUNING_GAME'
    },
    tetriList: tetriListSample,
    gameState: gameState,
    currRotation: 0,
    nbLineBlock: 2
}

describe('fallAlgo', () => {
    test('Dead', () => {
        let ret = fallAlgo({
            dispatch: () => { },
            alive: false
        });
        expect(ret).toBe(1);
    });

    test('WAIT_GAME', () => {
        let ret = fallAlgo({
            dispatch: () => { },
            alive: true,
            room: {
                state: 'WAIT_GAME'
            }
        });
        expect(ret).toBe(2);
    });

    test('Valid next tetrimuinos position', () => {
        let ret = fallAlgo(data); 

        expect(ret).toBe(5);
    });

    test('New tetriminos turn', () => {
        let ret = fallAlgo({
            ...data, gameState: {
                ...data.gameState,
                currMap: Array(20).fill().map(() => Array(10).fill(1))
            }
        });
        expect(ret).toBe(4);
    });


});