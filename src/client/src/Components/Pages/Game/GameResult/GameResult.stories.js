import React from 'react';
import GameResult from './GameResult'

const Template = (args) => <GameResult {...args} />

export const gameResultMultipleGame = Template.bind({});
export const gameResultSolo = Template.bind({});

gameResultMultipleGame.args = {
    winner : 'john',
    otherPlayer : [{username : 'john', score : 66}, {username :'roups', score : 10}],
    funcPlayAgain : null,
    funcLeaveRoom : null
};

gameResultSolo.args = {
    winner : 'jack',
    otherPlayer : [{username : 'jackdsdfsfds', score : 55}],
    funcPlayAgain : null,
    funcLeaveRoom : null
};

const Info = {
    title : 'Pages/Game Result'
};

export default Info; 