import React from 'react'
import TetrisBoard from './../Organisms/TetrisBoard/TetrisBoard';
import { useSelector } from 'react-redux';
import NextTetriminos from './../components/NextTetriminos/NextTetriminos';
import Typography from '@material-ui/core/Typography';

const HomeGame = () => {
    const tmpMap = useSelector(state => state.game.tmpMap);
    const tetriList = useSelector(state => state.game.tetriList);


    return (
        <div>
            <TetrisBoard currentBoard={tmpMap}/>
            <Typography variant='h3'>Current</Typography>
            <NextTetriminos tetriminos = {(tetriList.length) ? tetriList[0].shape[0] : null}/>
            <Typography variant='h3'>Next</Typography>
            <NextTetriminos tetriminos= {(tetriList.length > 1) ? tetriList[1].shape[0] : null}></NextTetriminos>
        </div>
    );
}

export default HomeGame
