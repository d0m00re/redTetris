import React from 'react'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        borderColor : '#666',
        width: '30px !important',
        height : '30px',
        border : '0.1rem solid'
    },

    defaultColor: {
        backgroundColor: 'white'
    },

    cyan: {
        backgroundColor: 'cyan'
    },
    
    blue: {
        backgroundColor: 'blue'
    },
    
    orange: {
        backgroundColor: 'orange'
    },
    
    yellow: {
        backgroundColor: 'yellow'
    },
    
    purple: {
        backgroundColor: 'purple'
    },
    
    green: {
        backgroundColor: 'chartreuse'
    },
    
    red: {
        backgroundColor : 'red'
    },

    grey: {
        backgroundColor: 'grey'
    }
})

const CaseColor =({caseValue, indexCase}) =>{
    const classes = useStyles(); // how to assign UseStyle

    const getColorWtValue = (value) => {
        switch(value) {
            case 1:
                return classes.cyan;
            case 2:
                return classes.blue;
            case 3:
                return classes.orange; 
            case 4:
                return classes.yellow;
            case 5:
                return classes.purple;
            case 6:
                return classes.green;
            case 7:
                return classes.red;
            case 8:
                return classes.grey;
            default:
                return classes.defaultColor;
        }
    }

    return (
        <Grid item key={'case' + indexCase} className={clsx(classes.root, getColorWtValue(caseValue))}></Grid>
    );
};

export default React.memo(CaseColor);