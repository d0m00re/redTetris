// check pos validity
const isOutPos = (gMap, pos, absPos)=>{
    if ((gMap.length <= pos.y + absPos.y) || (gMap[0].length <= pos.x +  absPos.x) ||
        absPos.x + pos.x < 0 || absPos.y + pos.y < 0)
                return (true);
    return (false);
}

const checkValidPushTetri  = (tetriMap, tetri, pos) =>{
    for (let y = 0; y < tetri.length;y++){
        for (let x = 0; x < tetri.length;x++) {
            if (isOutPos(tetriMap, pos, {x : x, y : y}))
            {
                // cas ou notre piece est e dehors du terrein de jeu
                if (tetri[y][x] > 0)
                    return false;
            }
            else if (tetriMap[y + pos.y][x + pos.x] > 0 && tetri[y][x] > 0)
                return(false);
        }
    }
    return (true);
}

// check case on our current tetri


const  mergeTetriOnMap = (tetriMap, tetri, pos, value = 1) =>{
    for (let y = 0; y < tetri.length;y++){
        for (let x = 0; x < tetri.length;x++) {
            if (!isOutPos(tetriMap, pos, {x:x,y:y}))
            tetriMap[y + pos.y][x + pos.x] = (tetri[y][x]) ? tetri[y][x] : tetriMap[y + pos.y][x + pos.x];//tetriMap[y + pos.y][x + pos.x] = (tetri[y][x]) ? value : tetriMap[y + pos.y][x + pos.x];
        }
    }
}

// check pos and push it
const checkAndPush = (tetriMap, tetri, pos, value = 1) => {
    if (!checkValidPushTetri(tetriMap, tetri, pos))
        return (false);
    mergeTetriOnMap(tetriMap, tetri, pos, value);
    return true;
}

// ret : new pos, action : find end pos and push it

const checkAndPushSpace = (tetriMap, tetri, pos, value = 1) => {
    // tant -> y + 1 valid
    // tetriMap.length === y size

    while (checkValidPushTetri(tetriMap, tetri, {x : pos.x, y : pos.y + 1})) {
        pos.y += 1;
    }
    mergeTetriOnMap(tetriMap, tetri, pos, value);
    return (true);
}


// delete line check 
// toruver l id sans aucu zero dedans
const getAllFullLine = (myMap) => {
    let arrId = [];

    for (let i =0; i < myMap.length; i++) {
        let currLine = myMap[i];
        if (currLine.includes(0) === false){
            arrId.push(i);
        }
    }
    return (arrId)
}

const deleteFullLine = (myMap, nbLineBlock) => {
    let getLines = getAllFullLine(myMap);
    //    // exlucde specific line
    getLines = getLines.filter(index => index + nbLineBlock < myMap.length);

    let replaceLine = getLines.map(() => Array(myMap[0].length).fill(0));

    

    getLines = myMap.filter((elem, index) => !getLines.includes(index));
    return replaceLine.concat(getLines);
}


module.exports = {
    mergeTetriOnMap,
    checkValidPushTetri,
    checkAndPush,
    getAllFullLine,
    deleteFullLine,
    checkAndPushSpace,
}