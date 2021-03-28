import React from 'react'

import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'
import Typography from '@material-ui/core/Typography';

import TwoButton from '../../../Molecules/TwoButton/TwoButton';

import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { withStyles, makeStyles } from '@material-ui/core/styles';

/*
result board
userlist
relaunch  game
*/
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

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

const MultiplePlayer = ({ otherPlayer }) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <StyledTableCell>Rank</StyledTableCell>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Score</StyledTableCell>
                </TableHead>
                <TableBody>
                    {otherPlayer.map((user, index) => (
                        <StyledTableRow key={`leaderboard-${user.username}`}>
                            <StyledTableCell component="th" scope="row">{index + 1}</StyledTableCell>
                            <StyledTableCell>{user.username} </StyledTableCell>
                            <StyledTableCell>{user.score} </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const GameResult = ({ winner, otherPlayer, funcPlayAgain, funcLeaveRoom, ownerBool, userList }) => {
    const classes = useStyles();

    return (
        <CenterPage>
            <>
                <Typography variant='h5'>Game report</Typography>
                <div className={classes.flexRow}>
                    <MultiplePlayer winner={winner} otherPlayer2={otherPlayer} otherPlayer={otherPlayer.map(_username => 
                        ({
                            username : _username,
                            score : userList.find(_user => _user.username === _username).score
                        }))}/>
                </div>
                {ownerBool &&
                    <TwoButton label1={'Play Again!'} label2={'Leave'} func1={funcPlayAgain} func2={funcLeaveRoom} />
                }
                {!ownerBool &&
                    <Button onClick={funcLeaveRoom} color='secondary' variant='contained'>Leave</Button>
                }
            </>
        </CenterPage> 
    )
}

export default GameResult;
