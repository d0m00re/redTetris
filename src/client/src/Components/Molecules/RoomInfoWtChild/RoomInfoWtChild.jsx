import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RoomInfo from './../../Atoms/RoomInfo/RoomInfo'; //'./../../../Atoms/RoomInfo/RoomInfo';
import PropTypes from 'prop-types';


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
    }
})

const RoomInfoWtChild = ({children, name, status, nbPlayer, keyFather}) => {
    const classes = useStyles();

    return (
        <div className={classes.flexRow} key={keyFather}>
            <>
            key father : {keyFather}
            <RoomInfo roomname={name} status={status} nbPlayer={nbPlayer} />
            {children}
            </>
        </div>
    )
}

RoomInfoWtChild.propTypes = {
    roomname : PropTypes.string,
    status : PropTypes.string,
    nbPlayer : PropTypes.number,
    children : PropTypes.element,
    keyFather : PropTypes.string
};

export default RoomInfoWtChild
 