import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from './../../../src/Components/Pages/Login/Login';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
const initialState = { id: 1 };

const Wrapper = ({children}) => <Provider store={mockStore(initialState)}>{children}</Provider>;

describe('Login Component', () => {
    test('should not crash', () => {
        let props = {
            err: false,
            errMsg: ''
        };

        let component = mount(<Wrapper><Login {...props} /></Wrapper>);

        expect(component.find('div')?.length).toBe(3);
    });

    test('should not crash 2', () => {
        let props = {
            err: true,
            errMsg: 'error message'
        };

        let component = mount(<Wrapper><Login {...props} /></Wrapper>);

        expect(component.find('div')?.length).toBe(6);
    });
})
 