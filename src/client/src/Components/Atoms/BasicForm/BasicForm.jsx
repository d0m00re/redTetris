import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      justifyContent: 'center',
      padding: '3px 8px',
      height: '25px',
      marginLeft: '8px',
      backgroundColor: 'orange'},

    inputColor: { 
      backgroundColor: 'white',
      padding: '8px 4px'
    },
    
    flexRow: {
          width : '95%',
          margin: '5px',
          padding: '16px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center', 
          backgroundColor: '#fcbf49'
      }
  });

const BasicForm = ({handleInput, funcButton, placeholder, buttonLabel}) => {
    const classes = useStyles();

    return (
        <form className={classes.flexRow}>
            <input type='text' className={classes.inputColor} onChange={handleInput} placeholder={placeholder}/>
            <Button variant='contained' onClick={funcButton} className={classes.button}>{buttonLabel}</Button>
        </form>
    );
};
 
BasicForm.defaultProps = {
  handleInput : null,
  funcButton : null,
  placeholder : '',
  buttonLabel : ''
};

BasicForm.propTypes = {
  handleInput : PropTypes.func,
  funcButton : PropTypes.func,
  placeholder : PropTypes.string,
  buttonLabel : PropTypes.string
};


export default BasicForm
