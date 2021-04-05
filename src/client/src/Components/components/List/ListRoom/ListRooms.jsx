import React from 'react'

import Typography from '@material-ui/core/Typography';
import {useSelector} from 'react-redux';

const ListRooms = () => {
    let roomlist = useSelector(state => state.generalSocketInfo.roomlist);

    return (
        <div>
            <Typography variant='h3'>List rooms : </Typography>
            {
                roomlist.map((room, index) => 
                <Typography key={'inforoom-' + index} variant='h5'>#{room.name}, owner : {room.owner}</Typography>
                )
            }
        </div>
    )
}

export default ListRooms;
