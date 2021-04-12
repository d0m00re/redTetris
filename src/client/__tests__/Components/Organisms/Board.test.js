import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Board from './../../../src/Components/Organisms//Board/Board';

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
    return mount(<Provider store={mockStore(defaultState)}><Board {...props} /></Provider>);
};

describe('Board Component', () => {
    test('should not crash', () => {
        let component = setUp({
           currentBoard : Array(20).fill().map(() => Array(10).fill(0))
        });

        expect(component.find('div')?.length).toBe(222);
    })
});