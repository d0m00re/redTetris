/*
import cTetriminos from './cTetriminos';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}
*/

class Piece {
    constructor() {
        this.piece = undefined;
        this.idRot = 0;
    }

    get piece(){
        return this.piece[this.idRot];
    }

    set piece(piece){
        this.piece = piece;
        this.idRot = 0;
    }

    rotation = () => {
        this.idRot = (this.idRot + 1) % this.piece.length;
    }
}

export default Piece;