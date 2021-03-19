import React from 'react';
import CaseColor from './CaseColor';

const Template = (args) => <CaseColor {...args} />;

export const ByDefault = () => <CaseColor caseValue={7} />;
export const Primary = () => <CaseColor caseValue={6} />;

export const WithTemplate = Template.bind({});
WithTemplate.args = {caseValue : 5}

const Info = {
    title: 'Atoms/CaseColor'
};

export default Info;
