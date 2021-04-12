import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BoardWithoutGameLoop from '../../../src/Components/Organisms/Board/BoardWithoutGameLoop';

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
    return mount(<Provider store={mockStore(defaultState)}>(<BoardWithoutGameLoop {...props} /></Provider>);

};

describe('BoardWithoutGameLoop Component', () => {
    test('should not crash', () => {
        let component = setUp({
           currentBoard : Array(20).fill().map(() => Array(10).fill(0))
        });

        expect(component.find('div')?.length).toBe(222);
    })
});