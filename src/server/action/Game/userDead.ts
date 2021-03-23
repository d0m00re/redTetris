import { Global } from './../../entity/Global';

import {
    SOCKET_PATCH_ROOM,
    SOCKET_PATCH_USER
} from './../../constant/socket'

const userDead = (io : any, socket : any, global : Global) => {
       // update room with user dead server side
       let userUpdate = global.setUserDeadInRoom(socket?.username);

       // check end game
       // si user solo alors sa mort signifie la fin de la partie
       // sinon la fin de la partie dne se finit que si il reste un seul joueur en vie
       // change game state
       let roomUpdate = global.checkEndGame(socket?.username);
   
       if (roomUpdate !== undefined) {
         console.log('room update');
         console.log(roomUpdate);
         
         
         io.emit(SOCKET_PATCH_ROOM, { room: roomUpdate });
       }
   
       // user update    
       if (userUpdate !== undefined) {
         console.log('user dead : ');
         console.log(userUpdate);
         
         
         io.emit(SOCKET_PATCH_USER, userUpdate);
       }
}

export default userDead;