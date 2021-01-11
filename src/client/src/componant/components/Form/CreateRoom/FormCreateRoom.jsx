import React, {useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {Context} from './../../../context/Store';

import {
    UPDATE_ROOM, 
  } from './../../../context/Constant';

const FormCreateRoom = () => {
    const [state, dispatch] = useContext(Context);

    const handleRoomname = (event) => {
        dispatch({type : UPDATE_ROOM, payload : event.target.value})
    }

    return (
        <>
            <TextField label="name" type="text" value={state.roomname} onChange={handleRoomname}/>
            <Button variant='contained'>CREATE ROOM</Button>
        </>
    )
}

export default FormCreateRoom
