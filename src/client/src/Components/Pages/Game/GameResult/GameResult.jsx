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

import { withStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

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

/*
 flexRow: {
        padding: '16px',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fcbf49',
        width: '90%'
    },
*/
const useStyles = makeStyles({

    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
      //  width: '90%',
        padding : '16px',
        backgroundColor: '#fcbf49',
        margin : '16px 0 8px 0'

    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    flexRowItem : {
        width : '100px',
        overflow: 'hidden',
        whiteSpace: 'nowrap', /* Don't forget this one */
        textOverflow: 'ellipsis',
        textAlign : 'center'
    },

    flexRowHeader : {
        backgroundColor : 'black',
        color : '#fcbf49',
        padding : '8px 0'
    },

    flexRowItemPlayer : {
        paddingTop : '8px'
    }
});

const GameResult = ({ otherPlayer, funcPlayAgain, funcLeaveRoom, ownerBool }) => {
    const classes = useStyles();

    return (
        <CenterPage>
            <>

                <Typography variant='h5'>Game report</Typography>
                <div className={classes.flexColumn}>
                    <div className={clsx(classes.flexRow, classes.flexRowHeader)}>
                        <div className={classes.flexRowItem}>Rank</div>
                        <div className={classes.flexRowItem}>Name</div>
                        <div className={classes.flexRowItem}>Score</div>
                    </div>

                    {otherPlayer.map((user, index) => (
                        <div className={clsx(classes.flexRow, classes.flexRowItemPlayer)}>
                            <div className={classes.flexRowItem}>{index + 1}</div>
                            <div className={classes.flexRowItem}>{user.username} </div>
                            <div className={classes.flexRowItem}>{user.score} </div>
                        </div>
                    ))}

                </div>
                {/*}
                <div className={classes.flexRow}>
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
                    </TableContainer>                </div>
                                */}
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
