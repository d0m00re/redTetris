import React from 'react'

import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

/*
result board
userlist
relaunch  game
*/
const useStyles = makeStyles({
    flexRow: {
        padding: '16px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fcbf49',
        width: '90%'
    }
});

const GameResult = ({ winner, otherPlayer, funcPlayAgain, funcLeaveRoom }) => {
    const classes = useStyles();

    return (
        <CenterPage>
            <>
                <Typography>Result Board</Typography>
                <div className={classes.flexRow}>
                    <Typography> Winner : {winner}</Typography>
                    {
                        otherPlayer.length > 0 &&
                        otherPlayer.map((user, index) =>
                            <Typography>{index + 1}) {user.username}, score : {user.score}</Typography>
                        )
                    }
                </div>
                <div>
                    <Button color='primary' variant='contained' onClick={funcPlayAgain}>Play Again!</Button>
                    <Button color='secondary' variant='contained' onClick={funcLeaveRoom}>Leave</Button>
                </div>
            </>
        </CenterPage>
    )
}

export default GameResult;
