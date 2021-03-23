import React, {useEffect, useState} from 'react'

import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import _ from "lodash"; // Import the entire lodash library
import {mergeTetriOnMap} from './../../logic/tetriLogic';

import GameRun from './Game/GameRun';

const HomeGame = () => {
    const [newTmpMap, setTmpMap] = useState(Array(20).fill().map(() => Array(10).fill(0)));
    const tetriList = useSelector(state => state.game.tetriList);
    const alive = useSelector(state => state.user.alive);

    const {game} = useSelector(state => state);

    const {userlist} = useSelector(state => state.generalSocketInfo);
    const userListServer = useSelector(state => state.user);
    const userListRoom = useSelector(state => state?.gameRoom?.userList);

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
                <GameRun newTmpMap={newTmpMap}
                         tetriList={tetriList}
                         userListRoom = {userListRoom}
                         user = {userListServer}
                         userListServer = {userlist} />
            }

            {
                alive === false && 
                <Typography variant = 'h1'>GAME LOOSE</Typography>
            }
        </div>
    );
}

export default HomeGame 