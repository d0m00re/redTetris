import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';

import {
    SET_ROOMNAME_FORM,  
} from './../../../../redux/Constant/User';

import {
    SOCKET_JOIN_ROOM
} from './../../../../redux/Constant/SocketIOProtocol';

const FormCreateRoom = () => {
    const {roomnameForm} = useSelector(state => state.user)
    const dispatch = useDispatch(); 
    
    const handleRoomname = (event) => {
        dispatch({type : SET_ROOMNAME_FORM, payload : event.target.value});
    }

    const submitRoomname = () => {
        console.log('---> socket_join_room : ' + roomnameForm);        
        dispatch({type : SOCKET_JOIN_ROOM});
    }

    return (
        <>
            <TextField label="roomname" type="text" value={roomnameForm} onChange={handleRoomname} />
            <Button variant='contained' onClick={submitRoomname}>CREATE ROOM</Button>
        </>
    )
}

export default FormCreateRoom
