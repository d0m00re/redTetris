import React from 'react';
import Login from './Login';

import {withProviderHOC} from './../../../indexUtils'; //'./../src/indexUtils';

import RoomLobyState from './../../../redux/storeTest/roomLobyState'

export const DefaultLogin = () => <Login />;

export default {
    title : 'Pages/Login',
    decorator : withProviderHOC(RoomLobyState)
}; 