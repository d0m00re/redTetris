import { useEffect } from 'react'
import useInterval from './useInterval';
import useActionUser from './../hook/useActionUser';

import { useDispatch, useSelector } from 'react-redux';

import fallAlgo from './fallAlgo';
import keyboardAdapter from './keyboardAdapter'



const useGameLoop = () => {
    let [action] = useActionUser();

    const gameState = useSelector(state => state.game); //nbLineBlock
    const room = useSelector(state => state.gameRoom);
    const alive = useSelector(state => state.user.alive);
    const tetriList = useSelector(state => state.game.tetriList);
    const currRotation = useSelector(state => state.game.currRotation);
    const nbLineBlock = useSelector(state => state.game.nbLineBlock)
    const dispatch = useDispatch();

    useEffect(() => {
        keyboardAdapter(dispatch, { action: action, room: room, alive: alive, tetriList: tetriList, gameState: gameState });
    }, [action]);
    //const fallAlgo = ({dispatch, alive, room, tetriList, state, currRotation, nbLineBlock}) => {

    // useInterval(fallAlgo, 500);
    useInterval(() => fallAlgo({
        dispatch: dispatch,
        alive: alive,
        room: room,
        tetriList: tetriList,
        gameState: gameState,
        currRotation,
        nbLineBlock
    }), 500);
}

export default useGameLoop
