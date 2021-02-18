import React from 'react'
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        border : '5px',
        borderColor : '#666',
        width: '20px !important',
        height : '20px',
    },
    orange:{
        backgroundColor : 'orange'
    },
    blue :{
        backgroundColor: 'blue'
    }
})

const RedTetrisCase=({caseValue, indexCase}) =>{
    const classes = useStyles(); // how to assign UseStyle

    return (
        <Grid item key={'case' + indexCase}
        className={clsx(classes.root, (caseValue === 0) ? classes.blue : classes.orange)}>{caseValue}</Grid>
    );
};

export default React.memo(RedTetrisCase);