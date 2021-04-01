//import * as actionsSocket from './redux/actions/SocketIOProtocol';
import * as typesSocket from './redux/Constant/SocketIOProtocol';
import * as actionUser from './redux/actions/User';

import {SET_ROOMS,
        ADD_ROOM,
        PATCH_LIST_ROOM,
        DELETE_ROOM,
        SET_LIST_USERS, 
        PATCH_USER,
        DELETE_USER_FROM_USERLIST,
        RESET_ROOM_AND_USER} from './redux/Constant/GeneralSocketInfo';

import {SET_GAME_ROOM, GAME_ROOM_RESET, GAME_ROOM_UPD_SHADOW} from './redux/Constant/GameRoom';

import * as actionsGame from './redux/actions/Game';

import * as typesGameRoom from './redux/Constant/GameRoom';
 
const initApiSocket = (store) => {
    const dispatch = store.dispatch;
    const socket = store.getState().generalSocketInfo.socket; 
  
    socket.on('connect', () => {console.log('connect success : ');});// connection

    socket.on(typesSocket.SOCKET_LINE_DELETE, (nbDeleteLine) => {
    ///  dispatch({type : INCR_NB_LINE_BLOCK, payload : nbDeleteLine});
      dispatch(actionsGame.incrNbLineBlock(nbDeleteLine));
  })

    socket.on(typesSocket.SOCKET_RECV_USERNAME, (resp) => { 
      console.log('SOCKET_RECV_USERNAME')
      if (resp.err)
      {
        //dispatch({type : SET_ERROR, payload : {error : true, errorMsg : resp.errorMsg}})
        dispatch(actionUser.setError(resp));
        
      }
      else {
        //dispatch({type : SET_USERNAME, payload : resp.username});
        dispatch(actionUser.setUsername(resp));
        //dispatch({type : SET_IS_CONNECT, payload : true});
        dispatch(actionUser.setIsConnected());
      }
    })

    socket.on(typesSocket.SOCKET_CONFIRM_JOIN_ROOM, (resp) => { 
        console.log('CONFIRM JOIN ROOM'); 
        if (resp.err)
        {
//            dispatch({type : SET_ERROR, payload : {error : true, errorMsg : resp.errorMsg}})
            dispatch(actionUser.setError(resp));

        }
        else{
          // svae current user room
            dispatch({type : SET_GAME_ROOM, payload : resp.room})
            //dispatch({type : SET_ROOMNAME_FORM, payload : ''})
            dispatch(actionUser.setRoomnameForm(''));
        }
    });

    socket.on(typesSocket.SOCKET_ALL_ROOMS, (resp) => {
      let {rooms, users} = resp;
 
        dispatch({type : SET_ROOMS, payload : rooms});
 
        
        dispatch({type : SET_LIST_USERS, payload : users})
       });

       // de la grosse merde
    socket.on(typesSocket.SOCKET_NEW_ROOM, (resp) => {

        if (resp.err){
            return 0;
        }
            
        dispatch({type : ADD_ROOM, payload : resp})
    }) 

    socket.on(typesSocket.SOCKET_UPDATE_ROOM, (resp) => { 
      console.log('SOCKET UPDATE ROOM');
      
      if (resp.error) return resp.errorMsg;
   
  // if (resp.room.userList.filter(_user => _user === user.username).length === 1)
  if (resp.room.userList.filter(_user => _user.username === store.getState().user.username).length === 1)
      dispatch({type : typesGameRoom.SET_GAME_ROOM, payload : resp.room});
      //dispatch
      dispatch({type : PATCH_LIST_ROOM, payload : resp.room});
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
      dispatch({type : PATCH_USER, payload : resp})
      
       
      if (store.getState().user.username === resp.name)
      {                
        //if ()
        //dispatch({type : SET_USER_ALIVE, payload : resp.alive});
        dispatch(actionUser.setUserAlive(resp.alive));
        
      }
      
      });

    socket.on(typesSocket.SOCKET_PLAY_AGAIN, ({roomName, username}) => {
      // reset user store for a new game
      if (username === store.getState().user.username)
        dispatch(actionUser.setUserAlive(true));//dispatch({type : SET_USER_ALIVE, payload : true});
      // reset all user | alive and saveTetriboard inside userlist
    //  let currentRoom = state.getState().generalSocketInfo.roomList.find(_room => _room.name === roomName);
    //  if (currentRoom !== undefined) {

      //}
      dispatch({type : GAME_ROOM_RESET})
      dispatch({type : RESET_ROOM_AND_USER, payload : {roomName : roomName}});
      dispatch(actionsGame.gameReset());
      // reset roomlist reducer

      // resret room current user
    })

    socket.on(typesSocket.SOCKET_PATCH_ROOM, (resp) => {
      console.log('SOCKET PATCH ROOM');
      console.log(resp);
      if (resp.room.userList.findIndex(_username => _username.username === store.getState().user.username) !== -1)
      {
        
        dispatch({type : typesGameRoom.SET_GAME_ROOM, payload : resp.room});
      }
        dispatch({type : PATCH_LIST_ROOM, payload : resp.room});
      });

    socket.on(typesSocket.SOCKET_LEAVE_ROOM, () => {
      console.log('SOCKET LEAVE ROOM')
        
      //dispatch({type : GAME_INIT_STATE});
      dispatch(actionsGame.gameInitState());
      dispatch({type : typesGameRoom.GAME_ROOM_INIT_STATE});
      //dispatch({type : typesGame.GAME_RESET_CURRMAP});
      dispatch(actionsGame.resetCurrentMap());
    });

    socket.on(typesSocket.SOCKET_RESET_ROOM, () => {
      //dispatch({type : typesGame.GAME_RESET_CURRMAP});
      dispatch(actionsGame.resetCurrentMap());
    });

    socket.on(typesSocket.SOCKET_DELETE_ROOM, (roomName) => {
      dispatch({type : DELETE_ROOM, payload : roomName});
    });

    socket.on(typesSocket.SOCKET_USER_LOGOUT, (username) => {
      dispatch({type : DELETE_USER_FROM_USERLIST, payload : username});      
    });

    socket.on(typesSocket.SOCKET_SHADOWS_ROOM, (shadow) => {
      console.log('------------  socket update shadow' + shadow.roomname);
      dispatch({type :  GAME_ROOM_UPD_SHADOW, payload : shadow.shadows});
    })
}

export default initApiSocket;