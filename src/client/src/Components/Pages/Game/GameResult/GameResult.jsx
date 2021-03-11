import React from 'react'

import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/*
result board
userlist
relaunch  game
*/

const GameResult = ({winner, otherPlayer, funcPlayAgain, funcLeaveRoom}) => {
    return (
        <CenterPage>
            <>
            <Typography>Result Board</Typography>
    <Typography> Winner : {winner}</Typography>
            {
                otherPlayer.length > 0 &&
                otherPlayer.map((user, index) =>
            <Typography>{index + 1}) {user.username}, score {user.score}</Typography>    
                )
            }

            <Button onClick={funcPlayAgain}>Play Again!</Button>
            <Button onClick={funcLeaveRoom}>Leave</Button>
            </>
        </CenterPage>
    )
}

export default GameResult;
