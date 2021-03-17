import React from 'react';

import RoomInfo from './RoomInfo';

export default {
  title: 'Atoms/Roominfo',
  component: RoomInfo,
};

const Template = (args) => <RoomInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  roomname : 'room1',
  status : 'WAIT_GAME',
  nbPlayer : 5
}; 
