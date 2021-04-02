export const dicoStatus = {
    WAIT_USER : 'Loby is open',
    RUNING_GAME : 'Game running',
    END_GAME : 'Game End',
    LOBY_FULL : 'Loby is full'
}

export const getStatus = (status, nbPlayer) => {
    if (status === dicoStatus.WAIT_USER && nbPlayer === 7)
        return (dicoStatus.LOBY_FULL);
    return (dicoStatus[status]);
}