import React from 'react'
import { useDispatch } from 'react-redux';

import BasicForm from './../../../Atoms/BasicForm/BasicForm';

import * as actionsUser from './../../../../redux/actions/User';
import * as actionSIP  from './../../../../redux/actions/SocketIOProtocol';

const FormCreateUser = () => {

  const dispatch = useDispatch();

  const handleUsername = (event) => {
    dispatch(actionsUser.setUsernameForm(event.target.value));
}

  const submitUsername = (event) => {
    dispatch(actionSIP.socketSendUsername());
  }

  return (<BasicForm handleInput={handleUsername} funcButton={submitUsername} placeholder={'username'} buttonLabel={'Play !'} />);
}

export default FormCreateUser;
