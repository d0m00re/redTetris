import React from 'react';
import RoomLoby from './RoomLoby';

const Template = (args) => <RoomLoby {...args} />

export const WithTemplate = Template.bind({});

WithTemplate.args = {username : 'jack'}

export const reduxUpdate = Template.bind({});

reduxUpdate.args = {
    user : {
        roomnameForm : 'coucou toi'
    }
}

const Info = {
    title : 'Pages/RoomLoby'
}

export default Info;