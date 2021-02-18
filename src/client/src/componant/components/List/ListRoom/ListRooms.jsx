import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import {useSelector, useDispatch} from 'react-redux';

const ListRooms = () => {
    let roomlist = useSelector(state => state.generalSocketInfo.roomlist);

    useEffect(() => {
        console.log('********** room list');
        console.log(roomlist);
        
        
    }, [roomlist]);

    return (
        <div>
            <Typography variant='h3'>List rooms : </Typography>
            {
                roomlist.map(room => 
                <Typography variant='h5'>#{room.name}, owner : {room.owner.name}</Typography>
                )
            }
        </div>
    )
}

export default ListRooms;
