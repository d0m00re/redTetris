import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HomeGame from '../../../src/Components/Pages/HomeGame';

import storeGameRun from './../../../src/redux/storeTest/storeRuningGame';

import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<Provider store={storeGameRun}>(<HomeGame /></Provider>);
};

describe('HomeGame Component', () => {
    
    test('should not crash - gameLoop', () => {
        let component = setUp();

        expect(component.find('div')?.length).toBe(231);
    });
});