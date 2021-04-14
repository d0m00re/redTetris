import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HomeGame from '../../../src/Components/Pages/HomeGame';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import { defaultState } from './../../../src/redux/redux';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

let tetriList2 = [
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
    ]
];

let shape = [
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]   
    ],
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]  
    ]
];

let tetriList = [
    {
        shape : shape
    },
    {
        shape : shape
    }
];

const setUp = (props) => {
    defaultState.gameRoom.shadows = [
        {
            username: 'd0m',
            shadow: Array(20).map(() => Array.map(10).fill(0))
        },
        {
            username: 'jack',
            shadow: Array(20).map(() => Array.map(10).fill(0))
        }
    ]

    defaultState.game.tetriList = tetriList;
    return mount(<Provider store={mockStore(defaultState)}>(<HomeGame {...props} /></Provider>);
};

describe('GameRun Component', () => {
    
    test('should not crash - gameLoop', () => {
        let component = setUp({
            newTmpMap: Array(20).fill().map(() => Array(10).fill(0)),
            tetriList: tetriList,
            userListRoom: [{ username: 'd0m', score: 0 }, { username: 'jack', score: 42 }],
            user: { username: 'd0m', sore: 0 },
            userListDeath: [],
            noGameLoop: false
        });

        expect(component.find('div')?.length).toBe(255);
    });

    /*
    test('should not crash - noGameLoop', () => {
        let component = setUp({
            newTmpMap: Array(20).fill().map(() => Array(10).fill(0)),
            tetriList: tetriList,
            userListRoom: [{ username: 'd0m', score: 0 }, { username: 'jack', score: 42 }],
            user: { username: 'd0m', sore: 0 },
            userListDeath: [],
            noGameLoop: true
        });

        expect(component.find('div')?.length).toBe(255);
    });
    */
});