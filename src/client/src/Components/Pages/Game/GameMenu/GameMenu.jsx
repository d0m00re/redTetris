import React from 'react'
import Button from '@material-ui/core/Button';
import HeaderBar from './../../../Organisms/HeaderBar/HeaderBar';

import Typography from '@material-ui/core/Typography'

import CenterPage from './../../../Atoms/Layout/CenterPage';//'./../components/Layout/CenterPage'

import { makeStyles } from '@material-ui/core/styles';

import TwoButton from '../../../Molecules/TwoButton/TwoButton';


 
const useStyles = makeStyles({
    flexRow: {
          padding: '16px',
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fcbf49',
          width : '90%'
      }
  });

const GameMenu = ({ username, room, funcRunGame, funcLeaveRoom, owner }) => {
    const classes = useStyles();

    return (
        <CenterPage>
            <HeaderBar text={`${username} @ ${room?.name}`} variant={'h5'} />
            
            <div className={classes.flexRow}>
            <Typography variant='body1'>Player {room?.userList?.length} / 7</Typography>
            {
                room?.userList.length > 0 &&
                room.userList.map((_username) =>
                    <Typography variant='body2'>{_username}</Typography>)
            }
            </div>
        
            {owner &&
            <TwoButton label1={'Run'} label2={'Leave'} func1={funcRunGame} func2={funcLeaveRoom}/>
            }
            {!owner &&
            <div>
                <Button onClick={funcLeaveRoom} color='secondary' variant='contained'>Leave</Button>
            </div>
            }
        </CenterPage>
    )
}

export default GameMenu;  