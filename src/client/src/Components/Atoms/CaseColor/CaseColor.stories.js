import React from 'react';
import CaseColor from './CaseColor';
// value

const Template = (args) => <CaseColor {...args} />;

let title = 'Case Color'

export const ByDefault = () => <CaseColor caseValue={7} />;
export const Primary = () => <CaseColor caseValue={6} />;

export const WithTemplate = Template.bind({});
WithTemplate.args = {caseValue : 5}

/*
export const Tertiary = Template.bind({});
Tertiary.args = { ...Primary.args, label: '📚📕📈🤓' };
*/

//export const TestArg = () => <CaseColor [caseValue]="test" />

export default {
    title: title
};
