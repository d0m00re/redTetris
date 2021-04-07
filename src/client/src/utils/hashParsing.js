/*
extract hash of this form : #room1[d0m]
input : #room1[d0m]
output
{
    username : 'd0m',
    roomname : 'room1'
}
*/
const hashParsing = (hash) => {

    let checkFormat = new RegExp('#[a-zA-Z0-9]+[[][a-zA-Z0-9]+\]');


    if (checkFormat.test(hash) === false){
        return undefined;
    }

    let roomname = hash.substring(1, hash.indexOf('['));
    let username = hash.substring(hash.indexOf('[')+1, hash.indexOf(']'));

    return {
        username : username,
        roomname : roomname
    }
}

export default hashParsing;