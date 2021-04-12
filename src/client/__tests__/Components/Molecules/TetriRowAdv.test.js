import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TetriRowAdv from './../../../src/Components/Molecules/TetriRowAdv/TetriRowAdv';
configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<TetriRowAdv {...props} />);
};

describe('TetriRowAdv Component', () => {
    test('should not crash', () => {
        let component = setUp({
            row : Array(10).fill(0),
            keyFather : '42'
        });

        expect(component.find('div')?.length).toBe(10);
    })
})
