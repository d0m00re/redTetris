import React from 'react'
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

const dicoStatus = {
    WAIT_USER : 'Loby is open',
    RUNING_GAME : 'Game running',
    END_GAME : 'Game End',
    LOBY_FULL : 'Loby is full'
}

const getStatus = (status, nbPlayer) => {
    if (status === dicoStatus.WAIT_USER && nbPlayer === 7)
        return (dicoStatus.LOBY_FULL);
    return (dicoStatus[status]);
}

const RoomInfo = ({ roomname, status, nbPlayer = 0 }) => {
    return (
        <div>
            <Typography variant='body1'>Roomname : {roomname}</Typography>
            <Typography variant='body1'>Status : {getStatus(status, nbPlayer)}</Typography>
            <Typography variant='body1'>Slots : {nbPlayer}/7</Typography>
        </div>

    )
};

RoomInfo.propTypes = {
    roomname : PropTypes.string,
    status : PropTypes.string,
    nbPlayer : PropTypes.number
};

export default RoomInfo;