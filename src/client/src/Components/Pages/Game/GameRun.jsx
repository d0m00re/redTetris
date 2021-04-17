import React from 'react'

import Board from '../../Organisms/Board/Board';
import BoardWithoutGameLoop from './../../Organisms/Board/BoardWithoutGameLoop';

import ViewBoard from '../../Organisms/ViewBoard/ViewBoard';
import Typography from '@material-ui/core/Typography';

import ViewBoardAdv from '../../Organisms/ViewBoardAdv/ViewBoardAdv';

import ViewInformation from './../../Organisms/ViewInformation/ViewInformation';

import { makeStyles } from '@material-ui/core/styles';

import {useSelector} from 'react-redux';

import PropTypes from 'prop-types';


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

const GameRun = ({ newTmpMap, tetriList, userListRoom, user, noGameLoop, userListDeath}) => {
    const styles = useStyles();
    let {nbLineBlock, score} = useSelector(state => state.game);
    let {shadows} = useSelector(state => state.gameRoom);
 
    return (
        <div className={styles.flexRow}>
            <div className={styles.margin}>
                {
                    noGameLoop === false &&
                    <Board currentBoard={newTmpMap} nbLineBlock={nbLineBlock} />
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
                    (tetriList?.length > 1) && <div className={styles.next}>
                        <Typography variant='h5' className={styles.title}>Next</Typography>
                        <ViewBoard currentBoard={tetriList[1].shape[0]} /></div> 
                }
                {
                    (userListRoom?.length > 1) &&
                    <div className={styles.containerFlexAdv}>
                        {
                            userListRoom.filter((_user) => _user.username !== user.username).map((username, index) =>
                                <div className={styles.containerFlexItemAdv} key={`gameRun-${index}-key`}>
                                    <Typography variant='body2' className={styles.general}>{username.username}</Typography>
                                  <ViewBoardAdv indexBoard={index} currentBoard={shadows?.find(_shadow => _shadow.username === username.username)?.shadow} userListDeath={userListDeath} username={username.username} />
                                </div>)
                            } 
                    </div> 
                    } 
            </div>
        </div>
    );
};

GameRun.defaultProps = {
    newTmpMap : Array(20).fill().map(() => Array(10).fill(0)),
    tetriList : [],
    userListRoom : [],
    user : {},
    noGameLoop : false,
};

GameRun.propTypes = {
    newTmpMap : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    tetriList : PropTypes.any,//PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
    userListRoom : PropTypes.arrayOf(PropTypes.shape({username : PropTypes.string, score : PropTypes.number})),
    user : PropTypes.object,
    noGameLoop : PropTypes.bool,
    userListDeath : PropTypes.any//PropTypes.arrayOf(PropTypes.shape({username : PropTypes.string, score : PropTypes.number}))
};

export default GameRun; 