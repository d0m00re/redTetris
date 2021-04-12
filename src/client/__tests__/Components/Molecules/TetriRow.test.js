import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TetriRow from './../../../src/Components/Molecules/TetrisRow/TetrisRow';
configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<TetriRow {...props} />);
};

describe('TetriRow Component', () => {
    test('should not crash', () => {
        let component = setUp({
            row : Array(10).fill(0),
            keyFather : '42'
        });

        expect(component.find('div')?.length).toBe(10);
    })
})
