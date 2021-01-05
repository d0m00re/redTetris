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
    
    /*
    ** game algo :** virer l utilisation massive de redux la garder que pour la gestion
    ** 1) determiner si la piece a teeind son emplacement final:
        * calculer sa futur position
        donc on avance d une case vers le bas
        * essayer d ajouter le tetriminos a notre plateau
            * si le tetriminso depasse du plateau vers le bas ou est en contact avec un tetriminos
                * poser la piece avec son etat n - 1
            * sinon continuer le jeu
            * 
        PLUS CHAUD QUE PREVU L ALGO
        G LE DEFINIR COMME IL FAUT
    */
    const updateMapTestAlgo1 = async () => {
        let cpMap = _.cloneDeep(state.currMap);
        let posTetri = state.currPosTetriminos;
    
        // copy tetriminos
        console.log('tetriminos : ');
        console.log(state.currTetriminos);

        // ajout du tetriminos
        let checkContact =false;
        let checkOusideOnX = false;// check if your componat go outside onx axe
        for (let y = 0; y < state.currTetriminos.tetri.length && !checkContact; y++){
            for (let x = 0; x < state.currTetriminos.tetri[0].length && !checkContact; x++){
                //console.log('turn : ' + (y + state.currPosTetriminos.y) + ' | ' + (x + state.currPosTetriminos.x));
                //end map
                console.log('y : ' + (y + state.currPosTetriminos.y) + ' | x : ' + (x + state.currPosTetriminos.x));
                if (x + state.currPosTetriminos.x >= cpMap[0].length){
                    checkOusideOnX = true;
                }
                
                else if (y + state.currPosTetriminos.y >= cpMap.length ||// atteind le bas du plateau
                    cpMap[y + state.currPosTetriminos.y][x + state.currPosTetriminos.x] > 0) // check if we don t erase form present
                    checkContact = true;
                else
                    cpMap[y + state.currPosTetriminos.y][x + state.currPosTetriminos.x] = 1;
                
            }
        }

        //console.log(cpMap);

        //cpMap[state.currPosTetriminos.y][state.currPosTetriminos.x] = 1;


        if (!checkContact)
        {
            dispatch({type : 'UPDATE_TMP_MAP', payload : cpMap});
            // updatetetriminos pos
            // change position
        }
        let newPos = nextPos(state.currPosTetriminos, cpMap, state.currentKey);

        //tetriminos final position - validation and ask a new one
        if (posTetri.y + 1 === cpMap.length){// || cpMap[posTetri.y + 1][posTetri.x] > 0) {
            // save current array in finalArray
            await dispatch({type : 'PLACE_TETRIMINOS'});
            // next tetriminos
            await dispatch({type : 'GET_NEXT_TETRIMINOS'});
            // remove line if full
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
            console.log('fuck');
        }
    }
    useInterval(updateMapTestAlgo1, 100);
}

export default useGameLoop
