import React from 'react'
import Button from '@material-ui/core/Button';
import HeaderBar from './../../../Organisms/HeaderBar/HeaderBar';


import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'

const GameMenu = ({ username, room, funcRunGame, funcLeaveRoom, owner}) => {
    return (
        <CenterPage>
            <HeaderBar text={`${username} @ ${room?.name}`} variant={'h5'} />
            {owner &&
            <Button onClick={funcRunGame}>RUN GAME</Button>
            }
            <Button onClick={funcLeaveRoom}>LEAVE ROOM</Button>
        </CenterPage>
    )
}

export default GameMenu
