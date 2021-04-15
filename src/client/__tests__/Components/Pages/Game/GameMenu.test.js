import GameMenu from './../../../../src/Components/Pages/Game/GameMenu/GameMenu';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUpDefault = (props) => {
    let _props = {
        ...props,
        username : 'john',
        room : {name : 'room1', userList : [{username : 'john', score : 55}, {username : 'jack', score : 60}]}
    }

    return shallow(<GameMenu {..._props} />)
};

let component = undefined;

describe('GameMenu component', () => {
   test('No owner', () => {
        component = setUpDefault({owner : true});

        expect(component.find('div').length).toBe(1);
   });
   test('Owner', () => {
        component = setUpDefault({owner : false});
        expect(component.find('div').length).toBe(2);
   });
});