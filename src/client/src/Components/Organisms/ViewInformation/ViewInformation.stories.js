import React from 'react';

import ViewInformation from './ViewInformation';

const Info = {
    title : 'Organism/ViewInformation',
    component: ViewInformation
}

export default Info;

const Template = (args) => <ViewInformation {...args} />;

export const Test = Template.bind({});
Test.args = {
    score : 56,
    block : 10
};