class Piece {
    constructor() {
        this._piece = undefined;
        this._idRot = 0;
    }

    get piece(){
        return this._piece.tetri[this._idRot];
    }

    get color(){
        return this._piece.color;
    }

    set piece(piece){
        this._piece = piece;
        this._idRot = 0;
    }

    rotation = () => {
        this._idRot = (this._idRot + 1) % this._piece.tetri.length;
    }
}

module.exports={
    Piece
}