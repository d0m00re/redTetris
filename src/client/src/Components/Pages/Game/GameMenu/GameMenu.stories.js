import React from 'react';
import GameMenu from './GameMenu';

import RoomLobyState from './../../../../redux/storeTest/roomLobyState'
import { withProviderHOC } from '../../../../indexUtils';

const Info = {
    title : 'Pages/GameMenu',
    componant: GameMenu,
    decorator: withProviderHOC(RoomLobyState)
} 

const Template = (args) => <GameMenu {...args} />

export const Primary = Template.bind({});

Primary.args = {
    username : 'jack',
    room : {name : 'room1', owner : 'd0m', userList : ['jack', 'miaous']},
    owner : 'd0m'
}

export default Info;