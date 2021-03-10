const getScoreByDeleteLine = (nbLineDelete) => {
    const score = [0, 40, 100, 300];

    return score[nbLineDelete];
}

module.exports = {
    getScoreByDeleteLine
}