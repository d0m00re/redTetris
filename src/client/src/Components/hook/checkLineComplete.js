let findLineComplete = (tabMap)=> {
    return tabMap.map((arr, index) => {
        return (arr.every(elem => elem > 0)) ? index : '';
    }).filter(elem => elem !== '');
}

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