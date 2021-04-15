const {isTetriCasePresent, isPosContactBoard} = require('./checkFunction');
const {cmpArray} = require('./../utils/cmpArray');

const isLoose = (tetriMap, tetri, pos) => {    
    let contactMinus = false;
    let contactBoard = false;
 
    let tmpPos = {y : 0, x : 0}
    for (tmpPos.y = 0; tmpPos.y < tetri.length; (tmpPos.y)++){
        for (tmpPos.x = 0; tmpPos.x < tetri.length; (tmpPos.x)++) {
            // case when tetri is on the begining
            if (pos.y + tmpPos.y < 0 && contactMinus === false)
                     contactMinus = isTetriCasePresent(tetri, tmpPos);
            else if (contactBoard === false)
                     contactBoard = isPosContactBoard(tetriMap, tetri, pos, tmpPos);
        }
    }

    if (cmpArray(tetri[1], [1,1,1,1]) && contactBoard && pos.y === -1)
        return true;
    return (contactMinus === true && contactBoard === true);
}

module.exports = {
    isLoose
};