import TwoButton from './TwoButton';

const Info = {
    title : 'Molecules/TwoButton'
}

const Template = (args) => <TwoButton {...args} />

export const joinLeave = Template.bind({});

joinLeave.args = {
    label1 : 'Run',
    label2 : 'Leave!',
    func1 : () => {},
    func2 : () => {}
}

export default Info;