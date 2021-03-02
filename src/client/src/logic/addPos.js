const addPos = (pos1, pos2) => {    
    return ({x : pos1.x + pos2.x, y : pos2.y + pos1.y});
}

module.exports = {
    addPos
}