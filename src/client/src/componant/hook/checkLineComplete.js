const { map } = require("lodash")

let findLineComplete = (tabMap)=> {
    return tabMap.map((arr, index) => {
        return (arr.every(elem => elem > 0)) ? index : '';
    }).filter(elem => elem !== '');
}



/*
commencer dans e topdes lignes
[

    0: [1, 0, 0, 0],
    1: [1, 1, 1, 1],
    2: [1, 1, 1, 0],
    3: [1, 1, 1, 1],

]
[
    0: [] // +2
    1: [] // +1
    2: [] // +1
    3: [] //  0

    0: [] // +2
    1: [] // +1
    2: [] // +1
    3: [] //  0

    0 -> 0 + 2
    1 -> 1 + 1
]

--->
[
    [1,0,0,0], // -2
    [1,1,1,1], //-1
    [1,1,1,0], //-1
    [1, 1, 1, 1], // 0
]
*/

/*
    [1, 3]
                     + 1 + 1 + 1
    [0, 1, 2, 3] => [X, 0, 1, 2]

    turn 3 : 
    delete one line
    [1,0,0,0], // +1
    [1,1,1,1], //+1
    [1,1,1,0], //+1
    [1, 1, 1, 1], // 0
*/

let deleteAndMooveBottomLine = (tabMap) => {
    let arr = findLineComplete(tabMap);

    for (let i = arr.length - 1; i >= 0; i--) {
        tabMap.splice(arr[i], 1);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        tabMap.unshift(Array(tabMap[i].length).fill(0));
    }    

    return (tabMap);
}

module.exports= {
    findLineComplete,
    deleteAndMooveBottomLine
}