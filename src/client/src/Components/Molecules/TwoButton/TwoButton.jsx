import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    button1 : {
        marginRight : '8px'
    }
});

const TwoButton = ({ label1, label2, func1, func2 }) => {
    const classes = useStyle();
    return (
        <div>
            <Button color='primary' variant='contained' onClick={func1} className={classes.button1}>{label1}</Button>
            <Button color='secondary' variant='contained' onClick={func2}>{label2}</Button>
        </div>
    )
};

TwoButton.propTypes = {
    label1: PropTypes.string,
    label2: PropTypes.string,
    func1: PropTypes.func,
    func2: PropTypes.func
}

export default TwoButton
