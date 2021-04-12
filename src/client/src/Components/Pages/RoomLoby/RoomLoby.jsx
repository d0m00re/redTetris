import React from 'react'

import CenterPage from '../../Atoms/Layout/CenterPage';
import HeaderBar from '../../Organisms/HeaderBar/HeaderBar';
import SelectorRooms from './../../components/List/ListRoom/SelectorRooms';
import FormCreateRoom from  './../../components/Form/CreateRoom/FormCreateRoom';

import PropTypes from 'prop-types';

const RoomLoby = ({username}) => {
    return (
        <CenterPage>
            <HeaderBar text={`${username}`} variant={'h5'} />
            <FormCreateRoom />
            <SelectorRooms />
        </CenterPage>
    ) 
} ;

RoomLoby.defaultProps = {
    username : ''
}

RoomLoby.propTypes = {
    username : PropTypes.string
}

export default RoomLoby
