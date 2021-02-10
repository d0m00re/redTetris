import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import {
  SET_USERNAME_FORM
} from './../../../../redux/Constant/User';
import { SOCKET_SEND_USERNAME } from '../../../../redux/Constant/SocketIOProtocol';

const FormCreateUser = () => {

  const usernameForm = useSelector(state => state.user.usernameForm);
  const dispatch = useDispatch(); 

    //const [username, setUsername] = useState('');

    const handleUsername = (event) => {
      //setUsername(event.target.value);
      dispatch({type : SET_USERNAME_FORM, payload : event.target.value});
    }

    const submitUsername = (event) => {
      dispatch({type : SOCKET_SEND_USERNAME});
    }

    return (
        <>
          <TextField label="username" type="text" value={usernameForm} onChange={handleUsername} />
          <Button variant='contained' onClick={submitUsername}>CREATE USER</Button>
        </>
    )
}

export default FormCreateUser;
