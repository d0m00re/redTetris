import React, {useEffect} from 'react'

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
                <Typography variant='h5'>#{room.name}, owner : {room.owner}</Typography>
                )
            }
        </div>
    )
}

export default ListRooms;
