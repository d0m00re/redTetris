import Death from './../../../src/Components/Organisms/ViewBoardAdv/Components/Death';

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUpDefault = (props) => {
    return shallow(<Death {...props} key = {'keydeath'} />);
};

let component = undefined;
 
describe('Death component', () => {
   test('Death', () => {
        component = setUpDefault({owner : false});
        expect(component.find('div').length).toBe(1);
   });
});