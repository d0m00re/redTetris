import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ViewBoard from './../../../src/Components/Organisms/ViewBoard/ViewBoard';
configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<ViewBoard {...props} />);
};

describe('ViewBoard Component', () => {
    test('should not crash', () => {
        let component = setUp({
           currentBoard : Array(20).fill().map(() => Array(10).fill(0))
        });

        expect(component.find('div')?.length).toBe(221);
    });
});
