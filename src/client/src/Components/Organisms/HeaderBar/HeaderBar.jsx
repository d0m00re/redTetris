import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const HeaderBar = ({ text, variant }) => {
    return (
        <header style={{ backgroundColor: 'orange' }}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                    <Typography variant={variant} style={{ margin: '0 16px 16px  16px' }}>{text}</Typography>
                </Grid>
            </Grid>
        </header>
    );
};

HeaderBar.defaultProps = {
    text : '',
    variant : ''
};

HeaderBar.propsTypes = {
    text : PropTypes.string,
    variant : PropTypes.string
};

export default HeaderBar;