import React from 'react'
import Button from '@material-ui/core/Button';
import HeaderBar from './../../../Organisms/HeaderBar/HeaderBar';

import Typography from '@material-ui/core/Typography'

import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'

const GameMenu = ({ username, room, funcRunGame, funcLeaveRoom, owner}) => {
    return (
        <CenterPage>
            <HeaderBar text={`${username} @ ${room?.name}`} variant={'h5'} />
            {owner &&
            <Button onClick={funcRunGame}>RUN GAME</Button>
            }
            <Typography variant='body1'>Player {room?.userList?.length} / 7</Typography>
            {
                room?.userList.length > 0 &&
            room.userList.map((_username) =>
                <Typography variant='body2'>{_username}</Typography>)
            }
            <Button onClick={funcLeaveRoom}>LEAVE ROOM</Button>
        </CenterPage>
    )
}

export default GameMenu;