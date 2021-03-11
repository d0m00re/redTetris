import React from 'react'

import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

/*
result board
userlist
relaunch  game
*/

const GameResult = () => {
    return (
        <CenterPage>
            <>
            <Typography>Result Board</Typography>

            <Button>Play Again!</Button>
            <Button>Leave</Button>
            </>
        </CenterPage>
    )
}

export default GameResult;
