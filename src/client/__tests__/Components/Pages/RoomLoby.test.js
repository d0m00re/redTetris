import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RoomLoby from '../../../src/Components/Pages/RoomLoby/RoomLoby';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import {defaultState} from './../../../src/redux/redux';

configure({ adapter: new Adapter() });

const mockStore = configureStore();

const setUp = (props) => {
    defaultState.game.tetriList = [
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0]
        ]
    ];

    defaultState.generalSocketInfo.roomlist = [
        {
            name: 'room1',
            uuid: '',
            userlist: ['john', 'jack'],
            owner: 'john',
            state: 'WAIT_USER',
            leaderboard: []
        },
        {
            name: 'room2',
            uuid: '',
            userlist: ['d0m', 'jack'],
            owner: 'd0m',
            state: 'WAIT_USER',
            leaderboard: []
        }
    ]

    return mount(<Provider store={mockStore(defaultState)}>(<RoomLoby {...props} /></Provider>);
};

describe('RoomLoby Component', () => {
    test('should not crash', () => {
        let component = setUp({
           currentBoard : Array(20).fill().map(() => Array(10).fill(0))
        });

        expect(component.find('div')?.length).toBe(9);
    });
});