const  mergeTetriOnMap = (tetriMap, tetri, pos, value = 1) =>{
    for (let y = 0; y < tetri.length;y++){
        for (let x = 0; x < tetri.length;x++) {
            if (!((tetriMap.length    < pos.y + y) || (tetriMap[0].length < pos.x + x)))
                tetriMap[y + pos.y][x + pos.x] = (tetri[y][x]) ? value : 0;
        }
    }
}

const checkValidPushTetri  = (tetriMap, tetri, pos) =>{
    // y out  check
//    if (tetriMap.length <= pos.y + tetri.length)
//        return (false);
    // x out check
     // if (tetriMap[0].length <= pos.x + tetri[0].length)
     //    return (false);

    for (let y = 0; y < tetri.length;y++){
        for (let x = 0; x < tetri.length;x++) {
            if ((tetriMap.length <= pos.y + y) || (tetriMap[0].length <= pos.x + x))
            {
                // cas ou notre piece est e dehors du terrein de jeu
                if (tetri[y][x] > 0)
                    return false;
            }
            else if (tetriMap[y + pos.y][x + pos.x] > 0)
                return(false);
        }
    }
    return (true);
}

const checkAndPush = (tetriMap, tetri, pos, value = 1) => {
    console.log('run');
    return 1
    if (!checkValidPushTetri(tetriMap, tetri, pos))
    {
        console.log(' invalide position');
        return (false);
    }
    mergeTetriOnMap(tetriMap, tetri, pos, value);
    return true;
}

module.exports = {
    mergeTetriOnMap,
    checkValidPushTetri,
    checkAndPush,
}