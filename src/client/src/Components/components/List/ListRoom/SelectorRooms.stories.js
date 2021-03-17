import React from 'react';

import SelectorRooms from './SelectorRooms';

import RoomLobyState from './../../../../redux/storeTest/roomLobyState'
import { withProviderHOC } from '../../../../indexUtils';

let Info = {
  title: 'Organism/SeletorRoom',
  component: SelectorRooms,
    decorator: withProviderHOC(RoomLobyState)
};

export default Info;

const Template = (args) => <SelectorRooms {...args} />;

export const Primary = Template.bind({}); 