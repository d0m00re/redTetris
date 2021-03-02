const {addPos} = require('./addPos');
// output : boolean
const isTetriCasePresent = (tetri, pos) => {
    return (tetri[pos.y][pos.x] !== 0);
}

// pos in on the current board not out
const isValidPosOnBoard = (tetriMap, pos) => {
    if (pos.x < 0 || pos.y < 0) return false;
    if (tetriMap.length <= pos.y || tetriMap[0].length <= pos.x) return false;
    return (true);
}

const isPosContactBoard = (tetriMap, tetri, posBoard, posTetri) => {
    let realPosBoard = addPos(posBoard, posTetri);
 
    if (isValidPosOnBoard(tetriMap, realPosBoard) === false) return false;
    
    return (tetriMap[realPosBoard.y][realPosBoard.x] !== 0 && tetri[posTetri.y][posTetri.x] !== 0) === true;
}

module.exports = {
    isTetriCasePresent,
    isValidPosOnBoard,
    isPosContactBoard
}