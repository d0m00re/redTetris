import React from 'react'
import Board from '../Organisms/Board/Board';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const HomeGame = () => {
    const tmpMap = useSelector(state => state.game.tmpMap);
    const tetriList = useSelector(state => state.game.tetriList);


    return (
        <div>
            <Board currentBoard={tmpMap}/>
            {
                (tetriList.length) && <>
                    <Typography variant='h3'>Current</Typography>
                    <Board   currentBoard={tetriList[0].shape[0]}/></>
            }
            {
                (tetriList.length > 1) && <>
                    <Typography variant='h3'>Next</Typography>
                    <Board   currentBoard={tetriList[1].shape[0]}/></>
            }
        </div>
    );
}

export default HomeGame
