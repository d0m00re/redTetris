import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const HeaderBar = ({ text, variant }) => {
    return (
        <header style={{ backgroundColor: 'orange' }}>
            <Grid container direction='column' justify='center' alignItems='center'>
                <Grid item>
                    <Typography variant={variant} style={{ margin: '16px' }}>{text}</Typography>
                </Grid>
            </Grid>
        </header>
    );
}

export default HeaderBar;