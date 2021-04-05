import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        width: '6px !important',
        height : '6px',
    },

    trueColor: {
        backgroundColor: 'orange' 
    },

    falseColor: {
        backgroundColor: 'white'
    }
    
})

const CaseBoolColor = ({caseValue, key}) => {
    const classes = useStyles();

    return (
        <div key={`caseboolColor-${key}`}
              className={clsx(classes.root, (caseValue !== 0) ? classes.trueColor : classes.falseColor)}>
        </div>
    )
}

export default React.memo(CaseBoolColor);
 