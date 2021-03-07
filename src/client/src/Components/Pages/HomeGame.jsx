import React, {useEffect, useState} from 'react'

import Board from '../Organisms/Board/Board';
import ViewBoard from '../Organisms/ViewBoard/ViewBoard';

import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import _ from "lodash"; // Import the entire lodash library
import {mergeTetriOnMap} from './../../logic/tetriLogic';
import { SET_USER_ALIVE } from '../../redux/Constant/User';

import ViewBoardAdv from '../Organisms/ViewBoardAdv';

const HomeGame = () => {
    const [newTmpMap, setTmpMap] = useState(Array(20).fill().map(() => Array(10).fill(0)));
    const tetriList = useSelector(state => state.game.tetriList);
    const alive = useSelector(state => state.user.alive);

    const {game} = useSelector(state => state);

    const {userlist} = useSelector(state => state.generalSocketInfo);
    const user = useSelector(state => state.user);
    const userList = useSelector(state => state?.user?.room?.userList);

    

    useEffect(() => {
        if (game.tetriList.length){
            let tmp = _.cloneDeep(game.currMap);
            mergeTetriOnMap(tmp, game.tetriList[0].shape[game.currRotation], game.posTetriminos);
            setTmpMap(tmp);
        }
    }, [game.posTetriminos, game.pos, game.currMap, game.tetriList, game.currRotation]);

    return (
        <div>
            {
                alive &&
                <Board currentBoard={newTmpMap}/>
            }
            {
                alive === false && 
                <Typography variant = 'h1'>GAME LOOSE</Typography>
            }
            {
                (tetriList.length > 1 && alive === true) && <>
                    <Typography variant='h3'>Next</Typography>
                    <ViewBoard   currentBoard={tetriList[1].shape[0]}/></>
            }
            {
                (userList?.length > 1) &&
            userList.filter(username => username !== user.username).map(username => <>
                    <Typography variant='h3'>{username}</Typography>
                    <ViewBoardAdv currentBoard={userlist.filter(user => user.name === username)[0].saveTetriBoard} />
                </>)
            }
        </div>
    );
}

export default HomeGame
