import React from 'react';
import BasicForm from './BasicForm';

const Template = (args) => <BasicForm {...args} />

export const LoginForm = Template.bind({});

LoginForm.args = {placeholder : 'username', buttonLabel : 'Play !'}

const Info = {
    title : 'Atoms/BasicForm'
}

export default Info;