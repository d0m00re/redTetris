import { mergeTetriOnMap, checkValidPushTetri, nbLineWillBeDelete, deleteFullLine } from './../../logic/tetriLogic';
import { isLoose } from './../../logic/isLoose';

import * as actionsSIP from './../../redux/actions/SocketIOProtocol';
import * as actionsGame from './../../redux/actions/Game';


const fallAlgo = ({ dispatch, alive, room, tetriList, gameState, currRotation, nbLineBlock }) => {
    if (alive === false)
        return (1);

    if (room.state !== 'RUNING_GAME')
        return (0);

    if (!tetriList[0] || !tetriList[0].shape) {
        return 0;
    }

    let cpMap = _.cloneDeep(gameState.currMap);
    let pos = { ...gameState.posTetriminos };
    pos.y += 1;

    if (!checkValidPushTetri(gameState.currMap, gameState.tetriList[0].shape[gameState.currRotation], pos)) {

        // check loose Array(20).map(() => Array(10).fill(0)) 0 === loose
        // si contact line 1 && (pas de contact line 0 && tetriminos case present on line 0)
        if (isLoose(gameState.currMap, gameState.tetriList[0].shape[currRotation], { x: pos.x, y: pos.y - 1 })) {
            dispatch(actionsSIP.socketUserDead());
            return 0;
        }
        else {
            mergeTetriOnMap(cpMap, gameState.tetriList[0].shape[gameState.currRotation], gameState.posTetriminos);

            let nbLineDelete = nbLineWillBeDelete(cpMap, nbLineBlock);

            cpMap = deleteFullLine(cpMap, gameState.nbLineBlock);

            dispatch(actionsGame.endTurnPut(cpMap));
            dispatch(actionsSIP.socketUpdateUserTetriBoard());
            if (nbLineDelete) {
                dispatch(actionsSIP.socketNbLineDelete(nbLineDelete));
                dispatch(actionsGame.gameIncrScore(nbLineDelete));
            }
            // get next tetriminos
            if (tetriList.length < 4)
                dispatch(actionsSIP.socketGetNextTetriminos());
            return 1;
        }
    }

    else {
        dispatch(actionsGame.updateTetriminosPos(pos)); //update tetriminos pos
    }
};

export default fallAlgo;