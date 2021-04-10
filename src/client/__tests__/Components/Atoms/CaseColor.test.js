import React from 'react';
import CaseColor from './../../../src/Components/Atoms/CaseColor/CaseColor';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const setUp = (props) => {
    return mount(<CaseColor {...props} />)
}

describe('CaseColor Component', () => {
    test('cyan', () => {
        let component = setUp({caseValue : 1, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('blue', () => {
        let component = setUp({caseValue : 2, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('orange', () => {
        let component = setUp({caseValue : 3, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('yellow', () => {
        let component = setUp({caseValue : 4, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('purple', () => {
        let component = setUp({caseValue : 5, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('green', () => {
        let component = setUp({caseValue : 6, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('red', () => {
        let component = setUp({caseValue : 7, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('grey', () => {
        let component = setUp({caseValue : 8, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
    test('default', () => {
        let component = setUp({caseValue : 9, key : '42'});
        expect(component.find('div')?.length).toBe(1);
    });
});