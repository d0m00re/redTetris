import React from 'react'
import { useDispatch } from 'react-redux';

import BasicForm from './../../../Atoms/BasicForm/BasicForm';

import {
  SET_USERNAME_FORM
} from './../../../../redux/Constant/User';
import { SOCKET_SEND_USERNAME } from '../../../../redux/Constant/SocketIOProtocol';

const FormCreateUser = () => {

  const dispatch = useDispatch();

  const handleUsername = (event) => {
    //setUsername(event.target.value);
    dispatch({ type: SET_USERNAME_FORM, payload: event.target.value });
  }

  const submitUsername = (event) => {
    dispatch({ type: SOCKET_SEND_USERNAME });
  }

  return (<BasicForm handleInput={handleUsername} funcButton={submitUsername} placeholder={'username'} buttonLabel={'Play !'} />);
}

export default FormCreateUser;
