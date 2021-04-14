import React from 'react'
import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    /* Trois valeurs : flex-grow | flex-shrink | flex-basis */
    flex: '1 1 0%',
    flexDirection: 'column'
  },
  container__data: {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    /* Trois valeurs : flex-grow | flex-shrink | flex-basis */
    flexDirection: 'column'
  },

  paper: {
    backgroundColor: 'orange',
    padding: '16px'
  }
});

const CenterPage = ({children}) => {
    const classes = useStyles();

    return (
        <section className={classes.container}>
        <Paper elevation={3} className={clsx(classes.paper, classes.container__data)}>
            {children}
        </Paper>
      </section>
    )
};

/*
CenterPage.defaultProps = {
  children : React.createElement('div')
};

CenterPage.propTypes = {
  children : PropTypes.element
};
*/

export default CenterPage
