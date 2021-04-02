//import * as actionsSocket from './redux/actions/SocketIOProtocol';
import * as typesSocket from './redux/Constant/SocketIOProtocol';
import * as actionUser from './redux/actions/User';

import * as actionsGame from './redux/actions/Game';

import * as actionsGameRoom from './redux/actions/GameRoom';
 
import * as actionsGeneralSocketInfo from './redux/actions/GeneralSocketInfo';

const initApiSocket = (store) => {
    const dispatch = store.dispatch;
    const socket = store.getState().generalSocketInfo.socket; 
  
    socket.on('connect', () => {console.log('connect success : ');});// connection

    socket.on(typesSocket.SOCKET_LINE_DELETE, (nbDeleteLine) => {
      dispatch(actionsGame.incrNbLineBlock(nbDeleteLine));
  })

    socket.on(typesSocket.SOCKET_RECV_USERNAME, (resp) => { 
      console.log('SOCKET_RECV_USERNAME')
      if (resp.err)
      {
        dispatch(actionUser.setError(resp));
        
      }
      else {
        dispatch(actionUser.setUsername(resp));
        dispatch(actionUser.setIsConnected());
      }
    })

    socket.on(typesSocket.SOCKET_CONFIRM_JOIN_ROOM, (resp) => { 
        if (resp.err)
        {
            dispatch(actionUser.setError(resp));

        }
        else{
          // svae current user room
            dispatch(actionsGameRoom.setGameRoom(resp.room));
            dispatch(actionUser.setRoomnameForm(''));
        }
    });

    socket.on(typesSocket.SOCKET_ALL_ROOMS, (resp) => {
      let {rooms, users} = resp;

        dispatch(actionsGeneralSocketInfo.setRooms(rooms));
        
        dispatch(actionsGeneralSocketInfo.setListUsers(users));
      });

       // de la grosse merde
    socket.on(typesSocket.SOCKET_NEW_ROOM, (resp) => {

        if (resp.err){
            return 0;
        }
        console.log('SOCKET NEW ROOM')
        console.log(resp);
        dispatch(actionsGeneralSocketInfo.addRoom(resp));
      }) 

    socket.on(typesSocket.SOCKET_UPDATE_ROOM, (resp) => {       
      if (resp.error) return resp.errorMsg;
   
  if (resp.room.userList.filter(_user => _user.username === store.getState().user.username).length === 1)
      dispatch(actionsGameRoom.setGameRoom(resp.room));
      dispatch(actionsGeneralSocketInfo.patchListRoom(resp));
      // need update room list
    });

    socket.on(typesSocket.SOCKET_GET_NEXT_TETRIMINOS, (resp) => {      
      dispatch(actionsGame.addTetri(resp));
    })

    // recive tetriminos from server
    socket.on(typesSocket.SOCKET_SEND_TETRIMINOS, (resp) => {
      dispatch(actionsGame.addTetri(resp));
    });

    // patch user
    socket.on(typesSocket.SOCKET_PATCH_USER, (resp) => {      
      dispatch(actionsGeneralSocketInfo.patchUser(resp));
       
      if (store.getState().user.username === resp.name)
      {                
        dispatch(actionUser.setUserAlive(resp.alive));
        
      }
      
      });

    socket.on(typesSocket.SOCKET_PLAY_AGAIN, ({roomName, username}) => {
      // reset user store for a new game
      if (username === store.getState().user.username)
        dispatch(actionUser.setUserAlive(true));
      // reset all user | alive and saveTetriboard inside userlist

      //}
      dispatch(actionsGameRoom.gameRoomReset());

      dispatch(actionsGeneralSocketInfo.resetRoomAndUser(roomName))

      dispatch(actionsGame.gameReset());
      // reset roomlist reducer

      // resret room current user
    })

    socket.on(typesSocket.SOCKET_PATCH_ROOM, (resp) => {
      if (resp.room.userList.findIndex(_username => _username.username === store.getState().user.username) !== -1)
      {
          dispatch(actionsGameRoom.setGameRoom(resp.room));

      }
        dispatch(actionsGeneralSocketInfo.patchListRoom(resp));

      });

    socket.on(typesSocket.SOCKET_LEAVE_ROOM, () => {        
      dispatch(actionsGame.gameInitState());
      dispatch(actionsGameRoom.setInitState());
      dispatch(actionsGame.resetCurrentMap());
    });

    socket.on(typesSocket.SOCKET_RESET_ROOM, () => {
      dispatch(actionsGame.resetCurrentMap());
    });

    socket.on(typesSocket.SOCKET_DELETE_ROOM, (roomName) => {
      dispatch(actionsGeneralSocketInfo.deleteRoom(roomName));
    });

    socket.on(typesSocket.SOCKET_USER_LOGOUT, (username) => {
      dispatch(actionsGeneralSocketInfo.deleteUserFromUserlist(username));      
    });

    socket.on(typesSocket.SOCKET_SHADOWS_ROOM, (shadow) => {
      dispatch(actionsGameRoom.gameRoomUpdateShadow(shadow));
  })
}

export default initApiSocket;