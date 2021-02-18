import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';

import CenterPage from '../../Layout/CenterPage';

import {
  SET_USERNAME_FORM
} from './../../../../redux/Constant/User';
import { SOCKET_SEND_USERNAME } from '../../../../redux/Constant/SocketIOProtocol';

import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles({
  root: {
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    /* Trois valeurs : flex-grow | flex-shrink | flex-basis */
    flex: '1 1 0%',
    flexDirection: 'column'
  },
  container__data: {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    /* Trois valeurs : flex-grow | flex-shrink | flex-basis */
    flexDirection: 'column'
  },
  button: {
    justifyContent: 'center', marginTop: '8px'
  },
  paper: {
    backgroundColor: 'orange',
    padding: '16px'
  }
});

const FormCreateUser = () => {

  const usernameForm = useSelector(state => state.user.usernameForm);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleUsername = (event) => {
    //setUsername(event.target.value);
    dispatch({ type: SET_USERNAME_FORM, payload: event.target.value });
  }

  const submitUsername = (event) => {
    dispatch({ type: SOCKET_SEND_USERNAME });
  }

  return (
    <CenterPage>
        <TextField label="username" type="text" value={usernameForm} onChange={handleUsername} variant={'outlined'} />
        <Button variant='contained' onClick={submitUsername} className={classes.button}>Play!</Button>
  </CenterPage>  )
}

export default FormCreateUser;
