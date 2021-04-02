import React from 'react'
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

import {getRoomStatus} from './../../../utils/getRoomStatus';

const RoomInfo = ({ roomname, status, nbPlayer = 0 }) => {
    return (
        <div>
            <Typography variant='body1'>Roomname : {roomname}</Typography>
            <Typography variant='body1'>Status : {getRoomStatus(status, nbPlayer)}</Typography>
            <Typography variant='body1'>Slots : {nbPlayer}/7</Typography>
        </div>
    );
};

RoomInfo.propTypes = {
    roomname : PropTypes.string,
    status : PropTypes.string,
    nbPlayer : PropTypes.number
};

export default RoomInfo;