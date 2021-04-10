import React from 'react';
import CenterPage from './../../../src/Components/Atoms/Layout/CenterPage';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUpDefault = () => {
    let props = {
      children :  React.createElement('div')
    };

    return shallow(<CenterPage {...props} />)
}

let component = undefined;

beforeEach(() => {
    component = setUpDefault();
});

describe('CenterPage Component', () => {
    test('should render without error', () => {
        console.log(component.debug());
        expect(component.find('div')?.length).toBe(1);
    });
});