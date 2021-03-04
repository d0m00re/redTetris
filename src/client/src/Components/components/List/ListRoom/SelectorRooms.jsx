import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

import {useSelector, useDispatch} from 'react-redux';

import {
    SOCKET_JOIN_ROOM, SOCKET_JOIN_ROOM_WT_NAME
} from './../../../../redux/Constant/SocketIOProtocol';

const useStyles = makeStyles({
    button: {
        justifyContent: 'center', marginTop: '8px'
    }
});

const SelectorRooms = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let roomlist = useSelector(state => state.generalSocketInfo.roomlist);

    useEffect(() => {
        console.log('PPPP');
        
        console.log(roomlist);
        
    }, [roomlist]);

    const submitRoomname = (roomname) => {
        //console.log('---> socket_join_room : ' + roomnameForm);
        console.log('ROOMNAME : ' + roomname);
            
        dispatch({type : SOCKET_JOIN_ROOM_WT_NAME, payload : {roomname : roomname}});
    }

    return (
        <table>
            <tr>
                <th>Roomname</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {
                roomlist.map(elem => 
                    <tr>
                        <td>{elem.name}</td>
                    <td>{elem.owner}</td>
                    <td>{elem?.state}</td>
                    <td>
                        <Button onClick={() => submitRoomname(elem.name)}>JOIN</Button>
                    </td>
                    </tr>
                    )
            }
        </table>
    )
}

export default SelectorRooms
