import React from 'react';
import GameResult from './GameResult'

export const GameResultTest = () =>
    <GameResult
        winner={'jack'}
        otherPlayer={[{username :'john', score : 25}, {username :'roups', score : 10}]}
        funcPlayAgain={null}
        funcLeaveRoom={null}
    />;

const Info = {
    title : 'Pages/Game Result'
};

export default Info;