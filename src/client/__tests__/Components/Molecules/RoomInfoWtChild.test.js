import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import RoomInfoWtChild from './../../../src/Components/Molecules/RoomInfoWtChild/RoomInfoWtChild';
configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<RoomInfoWtChild {...props} />);
};

describe('RoomInfoWtChild Component', () => {
    test('should not crash', () => {
        let component = setUp({
            status : 'WAIT_USER',
            children : React.createElement('div'),
            name :'room1',
            nbPlayer : 7,
            keyFather : '42'
        });

        expect(component.find('div')?.length).toBe(3);
    })
})
