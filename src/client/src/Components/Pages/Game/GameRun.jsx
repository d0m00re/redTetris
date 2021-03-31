import React from 'react'

import Board from '../../Organisms/Board/Board';
import BoardWithoutGameLoop from './../../Organisms/Board/BoardWithoutGameLoop';

import ViewBoard from '../../Organisms/ViewBoard/ViewBoard';
import Typography from '@material-ui/core/Typography';

import ViewBoardAdv from '../../Organisms/ViewBoardAdv/ViewBoardAdv';

import ViewInformation from './../../Organisms/ViewInformation/ViewInformation';

import { makeStyles } from '@material-ui/core/styles';

import {useSelector} from 'react-redux';

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
        gridTemplateRows: 'repeat(2, 180px)',
        backgroundColor: '#fcbf49',
    },
    containerFlexItemAdv: {
        alignSelf: 'center',
        justifyContent : 'center'
    },
    next: {
        backgroundColor: '#fcbf49',
        margin : '8px 0 8px 0'
    },
    title: {
        padding: '8px',
        textAlign : 'center'
    },
    general: {
        textAlign : 'center'
    }
})

const GameRun = ({ newTmpMap, tetriList, userListRoom, user, userListServer, noGameLoop = false, userListDeath = [] }) => {
    const styles = useStyles();
    let {nbLineBlock, score} = useSelector(state => state.game);
    let {shadows} = useSelector(state => state.gameRoom);


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
            <div>
                <ViewInformation score={score} block={nbLineBlock} />
            </div>
                {
                    (tetriList.length > 1) && <div className={styles.next}>
                        <Typography variant='h5' className={styles.title}>Next</Typography>
                        <ViewBoard currentBoard={tetriList[1].shape[0]} /></div> 
                }
                {
                    (userListRoom?.length > 1) &&
                    <div className={styles.containerFlexAdv}>
                        {
                            userListRoom.filter(_user => _user.username !== user.username).map(username => <>
                                <div className={styles.containerFlexItemAdv}>
                                    <Typography variant='body2' className={styles.general}>{username.username}</Typography>
                                  {/*}  <ViewBoardAdv currentBoard={userListServer.filter(user => user.name === username.username)[0].saveTetriBoard} userListDeath={userListDeath} username={username} /> */}
                                  <ViewBoardAdv currentBoard={shadows.find(_shadow => _shadow.username === username.username)?.shadow} userListDeath={userListDeath} username={username} />
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