import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HeaderBar from './../../../src/Components/Organisms/HeaderBar/HeaderBar';

configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<HeaderBar {...props} />);
};

describe('HeaderBar Component', () => {
    test('should not crash', () => {
        let component = setUp({
            text : 'Header info',
            variant : 'h1'
        });

        expect(component.find('div')?.length).toBe(2);
    });
})
