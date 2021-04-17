import GameResult from './../../../../src/Components/Pages/Game/GameResult/GameResult';

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUpDefault = (props) => {
    let _props = {
        ...props,
        otherPlayer : [{username : 'jack', score : 45}, {username : 'd0m', score : 32}],
        funcPlayAgain : () => {},
        funcLeaveRoom : () => {},
    }

    return shallow(<GameResult {..._props} />)
};

let component = undefined;

describe('GameResult component', () => {
   test('Owner view', () => {
       component = setUpDefault({ownerBool : true});
        expect(component.find('div').length).toBe(13);
    });

   test('No owner view', () => {
        component = setUpDefault({ownerBool : false});
        expect(component.find('div').length).toBe(13);
    });

});