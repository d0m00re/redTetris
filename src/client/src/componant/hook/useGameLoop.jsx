import { useEffect } from 'react'
import _ from "lodash" // Import the entire lodash library
import useInterval from './useInterval';
import useActionUser from './../hook/useActionUser';

import { mergeTetriOnMap, checkValidPushTetri, checkAndPush, checkAndPushSpace, deleteFullLine } from './../../logic/tetriLogic';
import { useDispatch, useSelector } from 'react-redux';

import { updateFinalMap, updateTmpMap, tetriRotation } from './../../redux/actions/Game';

import {SOCKET_GET_NEXT_TETRIMINOS} from './../../redux/Constant/SocketIOProtocol';
import {END_TURN_PUT, REMOVE_FIRST_TETRI, REMOVE_FIRST_TETRI_AND_RESET_ROTATION} from './../../redux/Constant/Tetri';
// return new position

/*
const deleteFullLine =  (cpMap) => {
    return cpMap;
} 
*/

const useGameLoop = () => {
    let [action] = useActionUser();

    const state = useSelector(state => state.game); //nbLineBlock
    const room = useSelector(state => state.user.room);
    const tetriDico = useSelector(state => state.game.tetriList);
    const dispatch = useDispatch();

    const fallAlgo = () => {
        if (room.state !== 'RUNING_GAME')
            return (0);

        if (!tetriDico[0] || !tetriDico[0].shape) {
            console.log('1 invalid tetriminos');
            console.log(state);
            console.log(state.currTetriminos);

            return 0;
        }

        let currTetriminos = tetriDico[0]; //state.currTetriminos;
        console.log('curr tetriminos : ');
        console.log(currTetriminos);

        let cpMap = _.cloneDeep(state.currMap);
        let pos = { ...state.posTetriminos };
        let { nbLineBlock } = state;
        pos.y += 1;

        if (!checkValidPushTetri(cpMap, currTetriminos.shape[state.currRotation], pos)) {
            //mergeTetriOnMap(cpMap, currTetriminos.shape[state.currRotation], state.posTetriminos);

            //              check delete line
            // nbLineBlock : disallow line deletion on height - nbLineBlock
            cpMap = deleteFullLine(cpMap, nbLineBlock);

            dispatch({type : END_TURN_PUT, payload : {newMap : cpMap}})

            // get next tetriminos
            dispatch({type : SOCKET_GET_NEXT_TETRIMINOS});

            // reset tetri
            
            //dispatch({type : REMOVE_FIRST_TETRI});
            //dispatch(tetriRotation(0));

            // update tetriminos list

            return 1;
        }
        else {
            mergeTetriOnMap(cpMap, currTetriminos.shape[state.currRotation], pos);
            //1) get next position
            dispatch(updateTmpMap({ tmpMap: cpMap, pos: pos }))
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
        let currTetriminos = tetriDico[0];

        if (room.state !== 'RUNING_GAME')
            return 0;

        if (!tetriDico[0] || !tetriDico[0].shape) {
            console.log('invalid tetriminos');
            console.log(currTetriminos);
            return 0;
        }

        switch (action) {
            case 'rotate':
                //console.log('rotation ->');
                ret = checkValidPushTetri(state.currMap, currTetriminos.shape[(state.currRotation + 1) % currTetriminos.shape.length], state.posTetriminos);
                if (ret)
                    dispatch(tetriRotation((state.currRotation + 1) % currTetriminos.shape.length))
                break;
            case 'right':
                tmpPos = { ...state.posTetriminos };
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.x += 1;
                ret = checkAndPush(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTmpMap({ tmpMap: cpMap, pos: tmpPos }));
                break;
            case 'left':
                tmpPos = { ...state.posTetriminos };
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.x -= 1;
                // mergeTetriOnMap(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                ret = checkAndPush(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTmpMap({ tmpMap: cpMap, pos: tmpPos }))
                break;
            case 'down':
                tmpPos = { ...state.posTetriminos };
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.y += 1;
                ret = checkAndPush(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                //mergeTetriOnMap(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTmpMap({ tmpMap: cpMap, pos: tmpPos }))
                break;
            case 'space':
                console.log('space');

                tmpPos = { ...state.posTetriminos };
                cpMap = _.cloneDeep(state.currMap);

                checkAndPushSpace(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                dispatch(updateTmpMap({ tmpMap: cpMap, pos: tmpPos }));

                break;
            default:
                console.log('default : ' + action);

        }

    }, [action]);

    useInterval(fallAlgo, 1000);
}

export default useGameLoop
