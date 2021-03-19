import React from 'react';

import RoomInfo from './RoomInfo';

const Info=  {
  title: 'Atoms/Roominfo',
  component: RoomInfo,
};

export default Info;

const Template = (args) => <RoomInfo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  roomname : 'room1',
  status : 'WAIT_GAME',
  nbPlayer : 5
}; 
