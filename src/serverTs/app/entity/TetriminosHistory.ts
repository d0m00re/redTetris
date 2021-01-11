export type TTetri = number[][][];


const tetriCyan : TTetri = [
    [
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
        [0,0,0,0],
    ],
    [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
    ],
    [
        [0,0,0,0],
        [0,0,0,0],
        [1,1,1,1],
        [0,0,0,0],
    ],
    [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
    ],
];
const tetriBlue : TTetri = [
    [
        [1,0,0],
        [1,1,1],
        [0,0,0],
    ],
    [
        [0,1,1],
        [0,1,0],
        [0,1,0],
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,0,1],
    ],
    [
        [0,1,0],
        [0,1,0],
        [1,1,0],
    ],
]

const tetriOrange: TTetri = [
    [
        [0,0,1],
        [1,1,1],
        [0,0,0],
    ],
    [
        [0,1,0],
        [0,1,0],
        [0,1,1],
    ],
    [
        [0,0,0],
        [1,1,1],
        [1,0,0],
    ],
    [
        [1,1,0],
        [0,1,0],
        [0,1,0],
    ],
]

const tetriYellow: TTetri = [
    [
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0],
    ]
]

const tetriGreen: TTetri = [
    [
        [0,1,1],
        [1,1,0],
        [0,0,0],
    ],
    [
        [0,1,0],
        [0,1,1],
        [0,0,1],
    ],
    [
        [0,0,0],
        [0,1,1],
        [1,1,0],
    ],
    [
        [1,0,0],
        [1,1,0],
        [0,1,0],
    ]
]

const tetriPurple: TTetri = [
    [
        [0,1,0],
        [1,1,1],
        [0,0,0],
    ],
    [
        [0,1,0],
        [0,1,1],
        [0,1,0],
    ],
    [
        [0,0,0],
        [1,1,1],
        [0,1,0],
    ],
    [
        [0,1,0],
        [1,1,0],
        [0,1,0],
    ]
]

const tetriRed: TTetri = [
    [
        [1,1,0],
        [0,1,1],
        [0,0,0],
    ],
    [
        [0,0,1],
        [0,1,1],
        [0,1,0],
    ],
    [
        [0,0,0],
        [1,1,0],
        [0,1,1],
    ],
    [
        [0,1,0],
        [1,1,0],
        [1,0,0],
    ]
]

export interface ITetriminos {
    shape : TTetri,
    color : string
}

export interface ITetriminosList {
    tetriminos : ITetriminos[]
}

export interface ITetriminosHistory {
    lenMax: number,
    history: number [],
    tetriList : ITetriminos[]
}

//--------------------------------------------

function getRandomArbitrary(min : number, max : number) {
    return Math.random() * (max - min) + min;
}

let tetriminos : ITetriminos[] = [
    {shape : tetriCyan, color:'cyan'},
    {shape : tetriBlue, color:'blue'},
    {shape : tetriOrange, color:'orange'},
    {shape : tetriYellow, color:'yellow'},
    {shape : tetriGreen, color:'green'},
    {shape : tetriPurple, color:'purple'},
    {shape : tetriRed, color:'red'},
];

export class TetriminosHistory implements ITetriminosHistory {
    public lenMax: number;
    public history: number[];
    public tetriList: ITetriminos[];

    constructor(raw: Partial<TetriminosHistory> = {}) {
        this.lenMax = raw.lenMax || 0;
        this.history = raw.history || [];
        this.tetriList = tetriminos;
    }

    public getWtId(id : number) : ITetriminos {
        if (this.history.length <= id)
        {
            // error
            
        }
        return this.tetriList[this.history[id]];
    }

    public addRandom() : void  {
        this.history.push(getRandomArbitrary(0, this.tetriList.length));
    }
}