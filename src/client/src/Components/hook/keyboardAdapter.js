import { checkValidPushTetri, checkAndPush, checkAndPushSpace } from './../../logic/tetriLogic';
import * as actionsGame from './../../redux/actions/Game';
import _ from "lodash" // Import the entire lodash library


const keyboardAdapter = (dispatch, {action, room, alive, tetriList, gameState}) => {
    if (alive === false)
        return (1);

    let tmpPos; 
    let cpMap;
    let ret;
    let currTetriminos = tetriList[0];

    if (room.state !== 'RUNING_GAME' || (!tetriList[0] || !tetriList[0].shape))
        return 0;

    switch (action) {
        case 'rotate':
            ret = checkValidPushTetri(gameState.currMap, currTetriminos.shape[(gameState.currRotation + 1) % currTetriminos.shape.length], gameState.posTetriminos);
            if (ret)
                dispatch(actionsGame.tetriRotation((gameState.currRotation + 1) % currTetriminos.shape.length))
            return 'rotate';

        case 'right':
            tmpPos = { ...gameState.posTetriminos };
            cpMap = _.cloneDeep(gameState.currMap);
            tmpPos.x += 1;
            ret = checkAndPush(cpMap, currTetriminos.shape[gameState.currRotation], tmpPos);
            if (ret)
                dispatch(actionsGame.updateTetriminosPos(tmpPos));
            return 'right';

        case 'left':
            tmpPos = { ...gameState.posTetriminos };
            cpMap = _.cloneDeep(gameState.currMap);
            tmpPos.x -= 1;
            ret = checkAndPush(cpMap, currTetriminos.shape[gameState.currRotation], tmpPos);
            if (ret)
                dispatch(actionsGame.updateTetriminosPos(tmpPos));
            return 'left';
        case 'down':
            tmpPos = { ...gameState.posTetriminos };
            cpMap = _.cloneDeep(gameState.currMap);
            tmpPos.y += 1;
            ret = checkAndPush(cpMap, currTetriminos.shape[gameState.currRotation], tmpPos);
            if (ret)
                dispatch(actionsGame.updateTetriminosPos(tmpPos));
            return 'down';
        case 'space':
            tmpPos = { ...gameState.posTetriminos };
            cpMap = _.cloneDeep(gameState.currMap);

            checkAndPushSpace(cpMap, currTetriminos.shape[gameState.currRotation], tmpPos);
            dispatch(actionsGame.updateTetriminosPos(tmpPos));
            return 'space';
            
        default:
            return 'none'; 
    }
};

export default keyboardAdapter;