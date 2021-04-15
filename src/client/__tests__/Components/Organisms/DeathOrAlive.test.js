import Death from './../../../src/Components/Organisms/ViewBoardAdv/Components/Death';

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUpDefault = (props) => {
    let _props = {
        ...props,
        username: 'jack',
        currentBoard: Array(20).fill().map((() => Array(10).fill(0))),
        indexBoardAdv: 'fakeKey'
    }
    return shallow(<Death {..._props} key={'keydeath'} />);
};

let component = undefined;

describe('DeathOrAlive component', () => {
    test('Alive', () => {
        component = setUpDefault({ userListDeath: [] });
        expect(component.find('div').length).toBe(1);
    });
    test('Die', () => {
        component = setUpDefault({ userListDeath: [{ username: 'jack', score: 42 }] });
        expect(component.find('div').length).toBe(1);
    });
});