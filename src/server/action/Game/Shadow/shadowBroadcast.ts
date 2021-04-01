import { Global } from "../../../entity/Global";

// save other user shadow
const shadowBroadcast = (io : any, socket : any, global : Global, saveTetriBoard: number[][]) => {
    global.setSaveTetriBoard(socket.username, saveTetriBoard);
}

export default shadowBroadcast;