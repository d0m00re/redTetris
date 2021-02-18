import {useEffect} from 'react'
import _ from "lodash" // Import the entire lodash library
import useInterval from './useInterval';
import useActionUser from './../hook/useActionUser';

import {mergeTetriOnMap, checkValidPushTetri, checkAndPush, checkAndPushSpace, deleteFullLine } from './../../logic/tetriLogic';
import { useDispatch, useSelector } from 'react-redux';

import {updateFinalMap, updateTmpMap, tetriRotation} from './../../redux/actions/Game';

// return new position

/*
const deleteFullLine =  (cpMap) => {
    return cpMap;
}
*/

const useGameLoop = () => {
    let [action] = useActionUser();

    const state= useSelector(state => state.game); //nbLineBlock
    const room = useSelector(state => state.user.room);
    const tetriDico = useSelector(state => state.tetri.tetriList);
    const dispatch = useDispatch(); 

    const fallAlgo = () => {
        console.log('Room status');
        console.log(room);
        
        console.log(room.state);
        
        
        if (room.state !== 'RUNING_GAME')
            return (0);
        let currTetriminos = state.currTetriminos;
        let cpMap = _.cloneDeep(state.currMap);
        let pos = {...state.posTetriminos};
        let {nbLineBlock} = state;
        pos.y += 1;
        
        if(!checkValidPushTetri(cpMap, currTetriminos.tetri[state.currRotation], pos))
        {
            mergeTetriOnMap(cpMap, currTetriminos.tetri[state.currRotation], state.posTetriminos);

//              check delete line
// nbLineBlock : disallow line deletion on height - nbLineBlock
            cpMap = deleteFullLine(cpMap, nbLineBlock);

            dispatch(updateFinalMap(cpMap));
            return 1;
        }
        else
        {
            mergeTetriOnMap(cpMap, currTetriminos.tetri[state.currRotation], pos);
            //1) get next position
            dispatch(updateTmpMap({tmpMap : cpMap, pos : pos}))
        }
/*
        //2) try insert tetriminos
            //2.1) succes we update the map
            //2.2) fail  we put tetriminos on the map
    */
    }

    useEffect(() => {
        let tmpPos;
        let cpMap;
        let ret;

        if (room.state !== 'RUNING_GAME')
            return 0;

        switch(action) {
            case 'rotate':
                    //console.log('rotation ->');
                    ret = checkValidPushTetri(state.currMap, state.currTetriminos.tetri[(state.currRotation + 1) % state.currTetriminos.tetri.length], state.posTetriminos);
                    if (ret)
                        dispatch(tetriRotation((state.currRotation + 1) % state.currTetriminos.tetri.length))
            break;
            case 'right':
                tmpPos = {...state.posTetriminos};
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.x += 1;
                ret = checkAndPush(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTmpMap({tmpMap : cpMap, pos : tmpPos}));
            break;
            case 'left':
                tmpPos = {...state.posTetriminos};
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.x -= 1;
               // mergeTetriOnMap(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                ret = checkAndPush(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTmpMap({tmpMap : cpMap, pos : tmpPos}))
            break;
            case 'down':
                tmpPos = {...state.posTetriminos};
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.y += 1;
                ret = checkAndPush(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                //mergeTetriOnMap(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTmpMap({tmpMap : cpMap, pos : tmpPos}))
            break;
            case 'space':
                console.log('space');
                
                tmpPos = {...state.posTetriminos};
                cpMap = _.cloneDeep(state.currMap);

                checkAndPushSpace(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                dispatch(updateTmpMap({tmpMap : cpMap, pos : tmpPos}));

            break;
            default :
                console.log('default : ' + action);
                
        }
        
    }, [action]);

    useInterval(fallAlgo, 1000);
}

export default useGameLoop
