import React from 'react';
import Login from './Login';

import {withProvider, withProviderHOC} from './../../../indexUtils'; //'./../src/indexUtils';
import { addDecorator } from '@storybook/react';
import RoomLobyState from './../../../redux/storeTest/roomLobyState'

export const DefaultLogin = () => <Login />;

export default {
    title : 'Pages/Login',
    decorator : withProviderHOC(RoomLobyState)
} 