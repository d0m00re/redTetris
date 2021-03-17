import React from 'react';
import Typographie from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import BasicForm from './../../../Atoms/BasicForm/BasicForm';

import {
    SET_ROOMNAME_FORM,  
} from './../../../../redux/Constant/User';
 
import {
    SOCKET_JOIN_ROOM
} from './../../../../redux/Constant/SocketIOProtocol'; 

const FormCreateRoom = () => {
     const {roomnameForm} = useSelector(state => state.user);
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
            <Typographie variant={'h5'}>Create a room</Typographie>
            <BasicForm  handleInput={handleRoomname} funcButton={submitRoomname} placeholder={'room name'} buttonLabel={'Create'}/>
        </>
    )
}

export default FormCreateRoom;
 