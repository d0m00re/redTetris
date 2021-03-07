import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        border : '5px',
        borderColor : '#666',
        width: '5px !important',
        height : '5px',
    },

    trueColor: {
        backgroundColor: 'orange'
    },
    falseColor: {
        backgroundColor: 'white'
    }
    
})

const CaseBoolColor = (value) => {
    const classes = useStyles();

    return (
        <Grid item key={'casouille'}
              className={clsx(classes.root, (value) ? classes.trueColor : classes.falseColor)}>
        </Grid>
    )
}

export default CaseBoolColor
