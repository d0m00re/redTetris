import React from 'react';
import CaseBoolColor from './../../../src/Components/Atoms/CaseBoolColor/CaseBoolColor';
import {mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<CaseBoolColor {...props} />)
}

describe('CaseBoolColor Component', () => {
    test('true', () => {
        let component = setUp({caseValue : 4, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('false', () => {
        let component = setUp({caseValue : 0, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
});