/*
** piece manager
*/

const {cTetriminos} = require('./cTetriminos');


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}


class PieceHistory{
    constructor(){
        this._arrayHistory = [],
        this._nbPiece = cTetriminos.length
    }

    getIdPiece = (id) => {
        if (this._arrayHistory.length <= id){
            for (let i = this._arrayHistory.length; i < id; i++){
                this._arrayHistory.push(getRandomIntInclusive(0, this._nbPiece - 1))
            }
        }
    }
}

module.exports = {
    PieceHistory
}