import React from 'react'

import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import Typography from '@material-ui/core/Typography';

import TwoButton from '../../../Molecules/TwoButton/TwoButton';

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

const MultiplePlayer = ({ winner, otherPlayer }) => {
    return (
        <>
            <Typography> Winner : {otherPlayer[0].username}</Typography>
            {
                otherPlayer.length > 0 &&
                otherPlayer.filter((e, i) => i !== 0).map((user, index) =>
                    <Typography>{index + 1}) {user.username}</Typography>
                )
            }
        </>);
}

const SoloPlayer = () => {
    return (
        <Typography> Looser!</Typography>
    );
}

const GameResult = ({ winner, otherPlayer, funcPlayAgain, funcLeaveRoom }) => {
    const classes = useStyles();

    return (
        <CenterPage>
            <>
                <Typography variant='h5'>Game report</Typography>
                <div className={classes.flexRow}>
                   <MultiplePlayer winner = {winner} otherPlayer = {otherPlayer}/>
                </div>
                <TwoButton label1={'Play Again!'} label2={'Leave'} func1={funcPlayAgain} func2={funcLeaveRoom} />
            </>
        </CenterPage>
    )
}

export default GameResult;
