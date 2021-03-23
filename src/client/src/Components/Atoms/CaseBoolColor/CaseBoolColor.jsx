import React, {useMemo} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

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

const CaseBoolColor = ({caseValue, indexRow = 0, indexCase = 0}) => {
    const classes = useStyles();

    return (
        <div key={`caseboolColor${indexRow}-${indexCase}`}
              className={clsx(classes.root, (caseValue !== 0) ? classes.trueColor : classes.falseColor)}>
        </div>
    )
}

export default React.memo(CaseBoolColor);
 