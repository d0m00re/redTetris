import React from 'react';
import RoomInfo from './../../../src/Components/Atoms/RoomInfo/RoomInfo';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUpDefault = () => {
    let props = {
        roomname : 'room1',
        status : 'WAIT_USER',
        nbPlayer : 7
    };

    return shallow(<RoomInfo {...props} />)
}

let component = undefined;

beforeEach(() => {
    component = setUpDefault();
});

describe('RoomInfo Component', () => {
    test('should render without error', () => {
      //  console.log(component.debug());
        expect(component.find('div')?.length).toBe(1);
    });
});