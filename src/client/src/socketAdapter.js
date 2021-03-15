import {
        SOCKET_SEND_TETRIMINOS,
        SOCKET_UPDATE_ROOM,
        SOCKET_GET_NEXT_TETRIMINOS,
        SOCKET_RECV_USERNAME, 
        SOCKET_CONFIRM_JOIN_ROOM,
        SOCKET_ALL_ROOMS,
        SOCKET_NEW_ROOM, 
        SOCKET_LEAVE_ROOM,
        SOCKET_PATCH_USER,
        SOCKET_PATCH_ROOM,
        SOCKET_DELETE_ROOM,
        SOCKET_RESET_ROOM} from './redux/Constant/SocketIOProtocol';
import {SET_ERROR, SET_USERNAME, SET_IS_CONNECT, SET_ROOMNAME_FORM, SET_USER_ALIVE, USER_RESET_ROOM} from './redux/Constant/User';
import {SET_ROOMS, SET_USERS, ADD_ROOM, PATCH_LIST_ROOM, DELETE_ROOM, SET_ROOM, SET_LIST_USERS, PATCH_LIST_USERS, PATCH_USER} from './redux/Constant/GeneralSocketInfo';
import {ADD_TETRI} from './redux/Constant/Tetri';

import {GAME_RESET_CURRMAP} from './redux/Constant/Game';


const initApiSocket = (store) => {
    const dispatch = store.dispatch;
    const socket = store.getState().generalSocketInfo.socket; 
    const user = store.getState().user;   
  
    socket.on('connect', () => {console.log('connect success : ');});// connection

    socket.on(SOCKET_RECV_USERNAME, (resp) => { 
      console.log('SOCKET_RECV_USERNAME')
      if (resp.err)
      {
        dispatch({type : SET_ERROR, payload : {error : true, errorMsg : resp.errorMsg}})
        
      }
      else {
        dispatch({type : SET_USERNAME, payload : resp.username});
        dispatch({type : SET_IS_CONNECT, payload : true});
      }
    })

    socket.on(SOCKET_CONFIRM_JOIN_ROOM, (resp) => { 
        console.log('CONFIRM JOIN ROOM'); 
        if (resp.err)
        {
            dispatch({type : SET_ERROR, payload : {error : true, errorMsg : resp.errorMsg}})
        }
        else{
          // svae current user room
            dispatch({type : SET_ROOM, payload : resp.room})
            dispatch({type : SET_ROOMNAME_FORM, payload : ''})
        }
    });

    socket.on(SOCKET_ALL_ROOMS, (resp) => {
      let {rooms, users} = resp;
 
        dispatch({type : SET_ROOMS, payload : rooms});
 
        
        dispatch({type : SET_LIST_USERS, payload : users})
       });

       // de la grosse merde
    socket.on(SOCKET_NEW_ROOM, (resp) => {

        if (resp.err){
            return 0;
        }
            
        dispatch({type : ADD_ROOM, payload : resp})
    }) 

    socket.on(SOCKET_UPDATE_ROOM, (resp) => { 
      console.log('SOCKET UPDATE ROOM');
      console.log('fucking user :');
      console.log(resp.room.userList);
      console.log(user.username);
      console.log(user);
      console.log(store.getState())
      
      console.log('---');
      
      
      console.log(resp.room.userList.filter(_user => _user === store.getState().user.username).length === 1);
      
      if (resp.error) return resp.errorMsg;

      //console.log(user.room.name + ' === ' + resp.room.name);
     // console.log(resp.room.room);
   //   if (user.room.name === resp.room.name )
  
   
   
  // if (resp.room.userList.filter(_user => _user === user.username).length === 1)
  if (resp.room.userList.filter(_user => _user === store.getState().user.username).length === 1)
    dispatch({type : SET_ROOM, payload : resp.room});
      //dispatch
      dispatch({type : PATCH_LIST_ROOM, payload : resp.room});
      // need update room list
    });

    socket.on(SOCKET_GET_NEXT_TETRIMINOS, (resp) => {
      console.log(SOCKET_GET_NEXT_TETRIMINOS);
      console.log(resp);
      
      
      dispatch({type : ADD_TETRI, payload : resp.tetri});
    })

    // recive tetriminos from server
    socket.on(SOCKET_SEND_TETRIMINOS, (resp) => {
      //SOCKET_SEND_TETRIMINOS
      dispatch({type : ADD_TETRI, payload : resp.tetri});
    });

    // patch user
    socket.on(SOCKET_PATCH_USER, (resp) => {
      console.log(SOCKET_PATCH_USER);
      
      dispatch({type : PATCH_USER, payload : resp})
      
       
      if (store.getState().user.username === resp.name)
      {        
        console.log('resp alive -->');
        console.log(resp);
        
        
        dispatch({type : SET_USER_ALIVE, payload : resp.alive});
      }
      
      })

    socket.on(SOCKET_PATCH_ROOM, (resp) => {
      console.log('SOCKET PATCH ROOM: ');
      console.log(resp);
      if (resp.room.userList.findIndex(_username => _username === store.getState().user.username) !== -1)
        dispatch({type : SET_ROOM, payload : resp.room});
        dispatch({type : PATCH_LIST_ROOM, payload : resp.room});
      });

    socket.on(SOCKET_LEAVE_ROOM, () => {
      dispatch({type : USER_RESET_ROOM});
      dispatch({type : GAME_RESET_CURRMAP});
    })

    socket.on(SOCKET_RESET_ROOM, () => {
      dispatch({type : GAME_RESET_CURRMAP});
    })

    socket.on(SOCKET_DELETE_ROOM, (roomName) => {
      console.log('DELETE A ROOM')
      dispatch({type : DELETE_ROOM, payload : roomName});
    })

      /*
    socket.on(SOCKET_LEAVE_ROOM, (resp) => {
      console.log('socketAdapter : ' + SOCKET_LEAVE_ROOM);
      console.log(resp);
      
    })
    */
    
}

export default initApiSocket;