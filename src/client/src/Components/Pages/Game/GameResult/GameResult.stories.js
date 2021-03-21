import React from 'react';
import GameResult from './GameResult'

const Template = (args) => <GameResult {...args} />

export const gameResultMultipleGame = Template.bind({});
export const gameResultSolo = Template.bind({});

gameResultMultipleGame.args = {
    winner : 'jack',
    otherPlayer : [{username :'john', score : 25}, {username :'roups', score : 10}],
    funcPlayAgain : null,
    funcLeaveRoom : null
};

gameResultSolo.args = {
    winner : 'jack',
    otherPlayer : [{username :'jack', score : 0}],
    funcPlayAgain : null,
    funcLeaveRoom : null
};

const Info = {
    title : 'Pages/Game Result'
};

export default Info; 