//probleme niveau reducer surement recoit pas les etats par default correctement

import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Home from '../../../src/Components/Pages/Home';

import { Provider } from 'react-redux';

//import {store} from './../../../src/redux/redux';

import storeRunningGame from './../../../src/redux/storeTest/storeRuningGame';
import storeGameEnd from './../../../src/redux/storeTest/storeGameEnd';
import storeWaitUser from './../../../src/redux/storeTest/storeWaitUser'
configure({ adapter: new Adapter() });

const makeComponent = (store) => <Provider store={store}><Home /></Provider>

describe('Test own store', () => {

    test('Running game', async () => {
        const component = mount(
            makeComponent(storeRunningGame)
        );
//        console.log(component.debug());
        expect(component.find('div').length).toBe(3);
    });

    test('GameEnd', async () => {
        const component = mount(
            makeComponent(storeGameEnd)
        );
 //       console.log(component.debug());
        expect(component.find('div').length).toBe(3);
    });

    test('WaitUser', async () => {
        const component = mount(
            makeComponent(storeWaitUser)
        );
  //      console.log(component.debug());
        expect(component.find('div').length).toBe(3);
    });
});