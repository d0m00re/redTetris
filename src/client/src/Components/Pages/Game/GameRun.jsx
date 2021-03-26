import React from 'react'

import Board from '../../Organisms/Board/Board';
import BoardWithoutGameLoop from './../../Organisms/Board/BoardWithoutGameLoop';

import ViewBoard from '../../Organisms/ViewBoard/ViewBoard';
import Typography from '@material-ui/core/Typography';

import ViewBoardAdv from '../../Organisms/ViewBoardAdv/ViewBoardAdv';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        //backgroundColor : '#333',
        border: '1px solid black',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    margin: {
        margin: '8px'
    },
    containerFlexAdv: {
        display : 'grid',
        gridTemplateColumns: 'repeat(3, 100px)',
        gridTemplateRows: 'repeat(2, 180px)'
    },
    containerFlexItemAdv: {
        //width : '33%',
        //margin : '8px'
        alignSelf: 'center' 
    }
})

const GameRun = ({ newTmpMap, tetriList, userListRoom, user, userListServer, noGameLoop = false, userListDeath = [] }) => {
    const styles = useStyles();

    return (
        <div className={styles.flexRow}>
            <div className={styles.margin}>
                {
                    noGameLoop === false &&
                    <Board currentBoard={newTmpMap} />
                }
                {
                    noGameLoop === true &&
                    <BoardWithoutGameLoop currentBoard={newTmpMap} />
                }
            </div>
            <div className={styles.margin}> 
                
                {
                    (tetriList.length > 1) && <>
                        <Typography variant='h3'>Next</Typography>
                        <ViewBoard currentBoard={tetriList[1].shape[0]} /></>
                }
                {
                    (userListRoom?.length > 1) &&
                    <div className={styles.containerFlexAdv}>
                        {
                            userListRoom.filter(_user => _user.username !== user.username).map(username => <>
                                <div className={styles.containerFlexItemAdv}>
                                    <Typography variant='body2'>{username.username}</Typography>
                                    <ViewBoardAdv currentBoard={userListServer.filter(user => user.name === username.username)[0].saveTetriBoard} userListDeath={userListDeath} username={username} />
                                </div>
                            </>)
                            } 
                    </div>
                    } 
            </div>
        </div>
    );
}

export default GameRun; 