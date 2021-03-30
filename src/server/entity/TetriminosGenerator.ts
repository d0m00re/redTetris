export type TTetri = number[][][];


const tetriCyan : TTetri = [
    [
        [0,0,0,0],
        [1,1,1,1],
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
        [2,0,0,0],
        [2,2,2,0],
    ],
    [
        [0,2,2,0],
        [0,2,0,0],
        [0,2,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [2,2,2,0],
        [0,0,2,0],
        [0,0,0,0]
    ],
    [
        [0,2,0,0],
        [0,2,0,0],
        [2,2,0,0],
        [0,0,0,0]

    ],
]

const tetriOrange: TTetri = [
    [
        [0,0,3,0],
        [3,3,3,0],
    ],
    [
        [0,3,0,0],
        [0,3,0,0],
        [0,3,3,0],
        [0,0,0,0]

    ],
    [
        [0,0,0,0],
        [3,3,3,0],
        [3,0,0,0],
        [0,0,0,0]
    ],
    [
        [3,3,0,0],
        [0,3,0,0],
        [0,3,0,0],
        [0,0,0,0]
    ],
]

const tetriYellow: TTetri = [
    [
        [0,4,4,0],
        [0,4,4,0],
    ]
]

const tetriGreen: TTetri = [
    [
        [0,5,5,0],
        [5,5,0,0],
    ],
    [
        [0,5,0,0],
        [0,5,5,0],
        [0,0,5,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [0,5,5,0],
        [5,5,0,0],
    ],
    [
        [5,0,0,0],
        [5,5,0,0],
        [0,5,0,0],
        [0,0,0,0]
    ]
]

const tetriPurple: TTetri = [
    [
        [0,6,0,0],
        [6,6,6,0],
    ],
    [
        [0,6,0,0],
        [0,6,6,0],
        [0,6,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [6,6,6,0],
        [0,6,0,0],
        [0,0,0,0]
    ],
    [
        [0,6,0,0],
        [6,6,0,0],
        [0,6,0,0],
        [0,0,0,0]
    ]
]

const tetriRed: TTetri = [
    [
        [7,7,0,0],
        [0,7,7,0],
    ],
    [
        [0,0,7,0],
        [0,7,7,0],
        [0,7,0,0],
        [0,0,0,0]
    ],
    [
        [0,0,0,0],
        [7,7,0,0],
        [0,7,7,0],
        [0,0,0,0]
    ],
    [
        [0,7,0,0],
        [7,7,0,0],
        [7,0,0,0],
        [0,0,0,0]
    ]
];

export interface ITetriminos {
    shape : TTetri,
    color : string
}

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

export class TetriminosGenerator {
    public tetriList: ITetriminos[];

    constructor() {
        this.tetriList = tetriminos;
    }

    public getRandom = () : ITetriminos => {
        let rand = Math.trunc(getRandomArbitrary(0, tetriminos.length));
        return (tetriminos[rand]);
    }
}