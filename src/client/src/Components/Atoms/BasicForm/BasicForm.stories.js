import React from 'react';
import BasicForm from './BasicForm';

const Template = (args) => <BasicForm {...args} />

export const LoginForm = Template.bind({});

LoginForm.args = {placeholder : 'username', buttonLabel : 'Play !'}

export default {
    title : 'Atoms/BasicForm'
}