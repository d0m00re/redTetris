import React from 'react'

import CenterPage from '../../Atoms/Layout/CenterPage';
import HeaderBar from '../../Organisms/HeaderBar/HeaderBar';
import SelectorRooms from './../../components/List/ListRoom/SelectorRooms';
import FormCreateRoom from  './../../components/Form/CreateRoom/FormCreateRoom';

const RoomLoby = ({username}) => {
    return (
        <CenterPage>
            <HeaderBar text={`${username}`} variant={'h5'} />
            <FormCreateRoom />
            <SelectorRooms />
        </CenterPage>
    ) 
} 

export default RoomLoby
