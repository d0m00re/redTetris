import React from 'react';
import BasicForm from './../../../src/Components/Atoms/BasicForm/BasicForm';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

const handleInput = () => {}

const funcButton = () => {}

configure({ adapter: new Adapter() });

const setUpDefault = () => {
    let props = {
        handleInput : handleInput,
        funcButton : funcButton,
        placeholder : 'username',
        buttonLabel : 'Play !'
    };

    return shallow(<BasicForm {...props} />)
}

//-------------------------------------------------------

let component = undefined;

beforeEach(() => {
    component = setUpDefault();
});

describe('BasicForm Component', () => {
    test('should render without error', () => {
      //  console.log(component.debug());
        expect(component.find('form')?.length).toBe(1);
        expect(component.find('input')?.length).toBe(1);        
    });
});