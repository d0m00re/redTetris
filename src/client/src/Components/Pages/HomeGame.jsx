import React, {useEffect, useState} from 'react'

import Board from '../Organisms/Board/Board';
import ViewBoard from '../Organisms/ViewBoard/ViewBoard';

import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import _ from "lodash"; // Import the entire lodash library
import {mergeTetriOnMap} from './../../logic/tetriLogic';

const HomeGame = () => {
    const [newTmpMap, setTmpMap] = useState(Array(20).fill().map(() => Array(10).fill(0)));
    const tetriList = useSelector(state => state.game.tetriList);

    const {game} = useSelector(state => state);

    useEffect(() => {
        if (game.tetriList.length){
            let tmp = _.cloneDeep(game.currMap);
            mergeTetriOnMap(tmp, game.tetriList[0].shape[game.currRotation], game.posTetriminos);
            setTmpMap(tmp);
        }
    }, [game.posTetriminos, game.pos, game.currMap, game.tetriList, game.currRotation]);

    return (
        <div>
                        <Board currentBoard={newTmpMap}/>
            {
                (tetriList.length > 1) && <>
                    <Typography variant='h3'>Next</Typography>
                    <ViewBoard   currentBoard={tetriList[1].shape[0]}/></>
            }
        </div>
    );
}

export default HomeGame
