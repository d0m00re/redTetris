import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles({
    root: {
        backgroundColor: '#fcbf49'
        },
    title: {
        padding: '8px',
        textAlign : 'center'
    },
    general: {
        textAlign : 'center'
    },
    flexRow: {
        padding : '0 8px 8px 8px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent : 'center',
        '& > div': {
            margin: '8px'
        }
    }

})

const ViewInformation = ({ score, block }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant='h5' className={classes.title}>
                Information
            </Typography>

            <div className={classes.flexRow}>
                <div>
                    <Typography className={classes.general}>
                        Lines
                    </Typography>
                    <Typography className={classes.general}>
                        {block}
                    </Typography>
                </div>
                <div>
                    <Typography className={classes.general}>
                        Score
                    </Typography>
                    <Typography className={classes.general}>
                        {score}
                    </Typography>
                </div>
            </div>
        </div>
    )
};

ViewInformation.defaultProps = {
    score : 0,
    block : 0
};

ViewInformation.propsTypes = {
    score : PropTypes.number,
    block : PropTypes.number
}

export default ViewInformation
