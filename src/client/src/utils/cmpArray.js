const cmpArray = (a1, a2) => {
    if (Array.isArray(a1) === false || Array.isArray(a2) === false)
        return false;
    if (a1.length !== a2.length)
        return false;
    for(let count = 0; count < a1.length; count++) {
        if (a1[count] !== a2[count])
            return false;
    }
    return true;
}

module.exports = {
    cmpArray
}