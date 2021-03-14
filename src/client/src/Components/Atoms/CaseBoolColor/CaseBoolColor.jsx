import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
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

const CaseBoolColor = ({caseValue}) => {
    const classes = useStyles();

    return (
        <div key={'casouille'}
              className={clsx(classes.root, (caseValue !== 0) ? classes.trueColor : classes.falseColor)}>
        </div>
    )
}

export default CaseBoolColor