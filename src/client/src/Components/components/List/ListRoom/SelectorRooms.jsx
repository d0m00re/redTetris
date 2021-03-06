import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { Typography } from '@material-ui/core';

import RoomInfoWtChild from './../../../Molecules/RoomInfoWtChild/RoomInfoWtChild';

import * as actions from './../../../../redux/actions/SocketIOProtocol';

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
    },
    typography: {
        paddingTop : '8px'
    }
})

const SelectorRooms = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let roomlist = useSelector(state => state.generalSocketInfo.roomlist);

    const submitRoomname = (roomname) => {
        dispatch(actions.socketJoinRoomWtName(roomname));
    }

    return (
        <>
            <Typography variant='h5' className={classes.typography}>List of room</Typography>
            {
                roomlist.map((_room, index) =>
                        <RoomInfoWtChild key={'selectorRoomTest' + index} keyFather={'selectorRoom' + index} name={_room.name} status={_room.state} nbPlayer={(_room?.userList?.length === undefined) ? 0 : _room?.userList?.length} >
                            <div>
                                <Button className={classes.button} onClick={() => submitRoomname(_room.name)}>JOIN</Button>
                            </div>
                        </RoomInfoWtChild>
                )
            }
        </>
    )
}

export default SelectorRooms; 