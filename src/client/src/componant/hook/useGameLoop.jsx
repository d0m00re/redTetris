import {useContext} from 'react'
import {Context} from './../context/Store';
import _ from "lodash" // Import the entire lodash library
import useInterval from './useInterval';

const useGameLoop = () => {
    const [state, dispatch] = useContext(Context);

    // go perform context game action
    /*
    test placement tetriminos
    test dessente simple case avec condition d arret et validation
    test avec un vrai tetriminos
    test transmission depuis le server
    */
    /*
        test 1 algo :
        * recuperer la map final : ok
        * ajout de la tetriminos : ok
        * update la tmpMap : ok
        *Si piece pose : ok
            * mettre a jours la map principal : ok
            * garder l information : ok
    */

    /*
        test 2 algo :
            * check complete line
            * add moore complex tetriminos
    */

    /*
Tetris algo :

// tetriminos actuel
// tmpMap : map utilise pour l affichage temporaire des tetriminos et son deplacement
// finalMap : map contenant uniquement les tetriminis deja place
1) tmpMap = finalMap, tetriminos = getCurrentTetriminos
2) IF (tetriminos.position touche le bord de la map (y - 1)) || (un element se trouve deja a la case suivante)
    THEN
        copy tmpMap in FinalMap 
        getNextTetriminos()
        IF (oneOreMore ligne completee)
        {
            supprimerles lignes concernee
        }
   SINON
    deplacer le tetriminos
    mise a jour  de tmpTab 
    */

    //current pos tetriminos
    //current map
    //current key
    const nextPos = (currPos, cpMap, currentKey) => {
        let tmpPos = {x : currPos.x, y : currPos.y};
        switch (currentKey){
            case 'left':
                if (tmpPos.x > 0)
                    tmpPos.x -= 1;
                else 
                    tmpPos.y += 1;
            break;
            case 'right':
                if (tmpPos.x + 1 < cpMap[0].length)
                    tmpPos.x += 1;
                else 
                    tmpPos.y += 1;
            break;
            default:
                tmpPos.y += 1;
            break;
        }
        return (tmpPos)
    }
    
    const updateMapTestAlgo1 = async () => {
        let cpMap = _.cloneDeep(state.currMap);
        let posTetri = state.currPosTetriminos;
    
        /*console.log*/(state);
        cpMap[state.currPosTetriminos.y][state.currPosTetriminos.x] = 1;
        dispatch({type : 'UPDATE_TMP_MAP', payload : cpMap});
        // updatetetriminos pos
        /*console.log*/('new pos');
        // change position
        let newPos = nextPos(state.currPosTetriminos, cpMap, state.currentKey);
        
        //tetriminos final position - validation and ask a new one
        if (posTetri.y + 1 === cpMap.length || cpMap[posTetri.y + 1][posTetri.x] > 0) {
            // save current array in finalArray
            await dispatch({type : 'PLACE_TETRIMINOS'});
            // next tetriminos
            await dispatch({type : 'GET_NEXT_TETRIMINOS'});

            await dispatch({type : 'CHECK_LINE_COMPLETE'});
        }
        //update position of our current tetriminos
        else if (newPos.y < cpMap.length && newPos.x < cpMap[0].length)
        {   
                await dispatch({type : 'UPDATE_TETRIMINOS_POS', payload : newPos});
            // check tetriminos position

            // if succes  runanither tetriminos
        }
        else{
            /*console.log*/('error : ');
            /*console.log*/(newPos);
            /*console.log*/(cpMap);
        }
    }
    useInterval(updateMapTestAlgo1, 100);
}

export default useGameLoop
