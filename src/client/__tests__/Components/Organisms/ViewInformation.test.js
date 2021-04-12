import React from 'react';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ViewInformation from './../../../src/Components/Organisms/ViewInformation/ViewInformation';
configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<ViewInformation {...props} />);
};

describe('ViewInformation Component', () => {
    test('should not crash', () => {
        let component = setUp({
           score : 42,
           block : 0
        });

        expect(component.find('div')?.length).toBe(4);
    })
})
