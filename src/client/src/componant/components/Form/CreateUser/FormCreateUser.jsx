import React, {useState, useEffect, useContext} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Context} from './../../../context/Store';


import {
  UPDATE_USERNAME, 
} from './../../../context/Constant';
const FormCreateUser = () => {
    const [state, dispatch] = useContext(Context);

    //const [username, setUsername] = useState('');

    const handleUsername = (event) => {
      //setUsername(event.target.value);
      console.log({type : UPDATE_USERNAME, payload : event.target.value });
      dispatch({type : UPDATE_USERNAME, payload : event.target.value });
    }

    useEffect(() => {
      console.log('state : ');
      console.log(state.username);
      
    }, [state.username])

    return (
        <>
          <TextField label="username" type="text" value={state.username} onChange={handleUsername} />
          <Button variant='contained'>CREATE USER</Button>
        </>
    )
}

export default FormCreateUser;
