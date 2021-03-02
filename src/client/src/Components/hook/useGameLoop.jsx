import { useEffect } from 'react'
import _ from "lodash" // Import the entire lodash library
import useInterval from './useInterval';
import useActionUser from './../hook/useActionUser';

import { mergeTetriOnMap, checkValidPushTetri, checkAndPush, checkAndPushSpace} from './../../logic/tetriLogic';
import { useDispatch, useSelector } from 'react-redux';

import { updateTmpMap, tetriRotation, updateTetriminosPos} from './../../redux/actions/Game';
import {SOCKET_GET_NEXT_TETRIMINOS} from './../../redux/Constant/SocketIOProtocol';
import {END_TURN_PUT} from './../../redux/Constant/Tetri';

import {isLoose} from './../../logic/isLoose';

const useGameLoop = () => {
    let [action] = useActionUser();

    const state = useSelector(state => state.game); //nbLineBlock
    const room = useSelector(state => state.user.room);
    const tetriList = useSelector(state => state.game.tetriList);
    const dispatch = useDispatch();

    const fallAlgo = () => {
        console.log('fall algo ... call');
        if (room.state !== 'RUNING_GAME')
            return (0);

        if (!tetriList[0] || !tetriList[0].shape) {
            console.log('Invalid tetriminos.');
            console.log(state.currTetriminos);
            return 0;
        }

        let cpMap = _.cloneDeep(state.currMap);
        let pos = { ...state.posTetriminos };
        pos.y += 1;

        if (!checkValidPushTetri(state.currMap, state.tetriList[0].shape[state.currRotation], pos)) {

            // check loose
            // cpMap, tetriList
            // superposition sur la lgine de 0 === loose
            //superposition ligne 1 && tetriminos case present sur la partie 0

            // general loose condition
            // si contact line 0 === loose
            // si contact line 1 && (pas de contact line 0 && tetriminos case present on line 0)
            if(isLoose(state.currMap, state.tetriList[0].shape[state.currRotation], pos))
            {
                console.log('game loose');
                return 0;   
            }
            else {
            dispatch({type : END_TURN_PUT, payload : {newMap : cpMap}})
            // get next tetriminos
            if (tetriList.length < 4)
                dispatch({type : SOCKET_GET_NEXT_TETRIMINOS});
            return 1;
            }
        }
        
        else {        
            dispatch(updateTetriminosPos(pos)); //update tetriminos pos
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
        let currTetriminos = tetriList[0];

        if (room.state !== 'RUNING_GAME')
            return 0;

        if (!tetriList[0] || !tetriList[0].shape) {
            console.log('invalid tetriminos');
            return 0;
        } 

        console.log('$ACTION : ' + action);

        switch (action) {
            case 'rotate':
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
                    dispatch(updateTetriminosPos(tmpPos)); 
                break;
            case 'left':
                console.log('------>>>>>>')
                tmpPos = { ...state.posTetriminos };
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.x -= 1;
                ret = checkAndPush(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTetriminosPos(tmpPos)); 
                break;
            case 'down':
                tmpPos = { ...state.posTetriminos };
                cpMap = _.cloneDeep(state.currMap);
                tmpPos.y += 1;
                ret = checkAndPush(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                if (ret)
                    dispatch(updateTetriminosPos(tmpPos)); 
                break;
            case 'space':
                tmpPos = { ...state.posTetriminos };
                cpMap = _.cloneDeep(state.currMap);

                checkAndPushSpace(cpMap, currTetriminos.shape[state.currRotation], tmpPos);
                dispatch(updateTetriminosPos(tmpPos)); 

                break;
            default:
            break;
        }

    }, [action]);

    useInterval(fallAlgo, 500);
}

export default useGameLoop
