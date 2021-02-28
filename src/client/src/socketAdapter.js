import {SOCKET_SEND_TETRIMINOS, SOCKET_UPDATE_ROOM ,SOCKET_GET_NEXT_TETRIMINOS, SOCKET_RECV_USERNAME, SOCKET_CONFIRM_JOIN_ROOM, SOCKET_ALL_ROOMS, SOCKET_NEW_ROOM, SOCKET_RUN_GAME} from './redux/Constant/SocketIOProtocol';
import {SET_ERROR, SET_USERNAME, SET_IS_CONNECT, SET_ROOMNAME_FORM} from './redux/Constant/User';
import {SET_ROOMS, ADD_ROOM, PATCH_LIST_ROOM, SET_ROOM} from './redux/Constant/GeneralSocketInfo';
import {ADD_TETRI} from './redux/Constant/Tetri'

const initApiSocket = (store) => {
    const dispatch = store.dispatch;
    const socket = store.getState().generalSocketInfo.socket;    
  
    socket.on('connect', () => {console.log('connect success : ');});// connection

    socket.on(SOCKET_RECV_USERNAME, (resp) => {
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
        dispatch({type : SET_ROOMS, payload : resp});
    });

    socket.on(SOCKET_NEW_ROOM, (resp) => {
        if (resp.err){
            return 0;
        }
            
        dispatch({type : ADD_ROOM, payload : resp})
    })

    socket.on(SOCKET_UPDATE_ROOM, (resp) => { 
      if (resp.error) return resp.errorMsg;


      dispatch({type : SET_ROOM, payload : resp.room});
      //dispatch
      dispatch({type : PATCH_LIST_ROOM, payload : resp.room});
      // need update room list
    });

    socket.on(SOCKET_GET_NEXT_TETRIMINOS, (resp) => {
      dispatch({type : ADD_TETRI, payload : resp.tetri});
    })

    // recive tetriminos from server
    socket.on(SOCKET_SEND_TETRIMINOS, (resp) => {
      //SOCKET_SEND_TETRIMINOS
      dispatch({type : ADD_TETRI, payload : resp.tetri});
    }) 
}

export default initApiSocket;