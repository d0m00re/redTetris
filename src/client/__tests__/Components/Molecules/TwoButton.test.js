import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TwoButton from './../../../src/Components/Molecules/TwoButton/TwoButton';
configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<TwoButton {...props} />);
};

describe('TwoButton Component', () => {
    test('should not crash', () => {
        let component = setUp({
            label1 : 'label1',
            label2 : 'label2',
            func1 : () => {},
            func2 : () => {}
        });

        expect(component.find('div')?.length).toBe(1);
    })
})
