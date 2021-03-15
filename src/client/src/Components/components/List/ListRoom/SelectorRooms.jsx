import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import {
    SOCKET_JOIN_ROOM_WT_NAME
} from './../../../../redux/Constant/SocketIOProtocol';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fcbf49',
        width: '100%',
        marginTop: '8px',
        padding: '8px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'orange'
    }
})

const SelectorRooms = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let roomlist = useSelector(state => state.generalSocketInfo.roomlist);

    const submitRoomname = (roomname) => {
        //console.log('---> socket_join_room : ' + roomnameForm);
        console.log('ROOMNAME : ' + roomname);

        dispatch({ type: SOCKET_JOIN_ROOM_WT_NAME, payload: { roomname: roomname } });
    }

    return (
        <>
            <Typography variant='h5'>List of room</Typography>
            {
                roomlist.map(elem =>
                    <div className={classes.flexRow}>
                        <div>
                        <Typography variant='body1'>Roomname : {elem.name}</Typography>
                        <Typography variant='body1'>Status : {elem.state}</Typography>
                        <Typography variant='body1'>Slots : 5/7</Typography>
                        </div>
                        <div>
                            <Button className={classes.button} onClick={() => submitRoomname(elem.name)}>JOIN</Button>
                        </div>
                    </div>    
                )
            }
        </>
    )
}

export default SelectorRooms
/*
   <td>{elem.name}</td>
                        <td>{elem.owner}</td>
                        <td>{elem?.state}</td>
                        <td>
                            <Button onClick={() => submitRoomname(elem.name)}>JOIN</Button>
                        </td>
*/