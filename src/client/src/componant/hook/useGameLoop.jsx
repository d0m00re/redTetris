import {useContext, useEffect} from 'react'
import {Context} from './../context/Store';
import _, { lowerFirst } from "lodash" // Import the entire lodash library
import useInterval from './useInterval';
import useActionUser from './../hook/useActionUser';

import {mergeTetriOnMap, checkValidPushTetri, checkAndPush} from './../../logic/tetriLogic';

const useGameLoop = () => {
    const [state, dispatch] = useContext(Context);
    let [action] = useActionUser();

    const fallAlgo = () => {
        let currTetriminos = state.currTetriminos;
        let cpMap = _.cloneDeep(state.currMap);
        let pos = {...state.posTetriminos};
        pos.y += 1;
        
        if(!checkValidPushTetri(cpMap, currTetriminos.tetri[state.currRotation], pos)){
            console.log('we can t do push this sheet');
            return 1;
        }

        mergeTetriOnMap(cpMap, currTetriminos.tetri[state.currRotation], pos);
        //1) get next position
        dispatch({type : 'UPDATE_TMP_MAP', payload : {tmpMap : cpMap, pos : pos}});

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
        console.log(action);
        switch(action) {
            case 'rotate':
                    console.log('rotation ->');
                    dispatch({type : 'TETRI_ROTATION', payload : (state.currRotation + 1) % state.currTetriminos.tetri.length})
            break;
            case 'right':
                tmpPos = {...state.posTetriminos};
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.x += 1;
                mergeTetriOnMap(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                dispatch({type : 'UPDATE_TMP_MAP', payload : {tmpMap : cpMap, pos : tmpPos}});
            break;
            case 'left':
                tmpPos = {...state.posTetriminos};
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.x -= 1;
               // mergeTetriOnMap(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                ret = checkAndPush(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                if (ret)
                    dispatch({type : 'UPDATE_TMP_MAP', payload : {tmpMap : cpMap, pos : tmpPos}});
            break;
            case 'down':
                tmpPos = {...state.posTetriminos};
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.y += 1;
                ret = checkAndPush(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                //mergeTetriOnMap(cpMap, state.currTetriminos.tetri[state.currRotation], tmpPos);
                if (ret)
                    dispatch({type : 'UPDATE_TMP_MAP', payload : {tmpMap : cpMap, pos : tmpPos}});
            break;
            case 'space':

            break;
            case 'left':

            break;
        }
        
    }, [action]);

    useInterval(fallAlgo, 1000);
}

export default useGameLoop
