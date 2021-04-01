import React from 'react';
import Typographie from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import BasicForm from './../../../Atoms/BasicForm/BasicForm';

import * as actionsUser from './../../../../redux/actions/User';
import * as actionSIP  from './../../../../redux/actions/SocketIOProtocol';


const FormCreateRoom = () => {
     const {roomnameForm} = useSelector(state => state.user);
    const dispatch = useDispatch(); 
    
    const handleRoomname = (event) => {
        dispatch(actionsUser.setRoomnameForm(event.target.value));
    }

    const submitRoomname = () => {
        console.log('---> socket_join_room : ' + roomnameForm);        
        dispatch(actionSIP.socketJoinRoom());
    }

    return (
        <>
            <Typographie variant={'h5'}>Create a room</Typographie>
            <BasicForm  handleInput={handleRoomname} funcButton={submitRoomname} placeholder={'room name'} buttonLabel={'Create'}/>
        </>
    )
}

export default FormCreateRoom;
 