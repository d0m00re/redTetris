import React from 'react'
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles({
  root: {
    justifyContent: 'center'
  },
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
  button: {
    justifyContent: 'center',
    padding: '3px 8px',
    height: '25px',
    marginLeft: '8px',
    backgroundColor: 'orange'   },
  paper: {
    backgroundColor: 'orange',
    padding: '16px'
  },
  inputColor: { 
    backgroundColor: 'white',
    padding: '8px 4px'
  },
  flexRow: {
        margin: '5px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fcbf49'
    }
});

const BasicForm = ({handleInput = null, funcButton = null, placeholder = '', buttonLabel = ''}) => {
    const classes = useStyles();

    return (
        <form className={classes.flexRow}>
            <input type='text' className={classes.inputColor} onChange={handleInput} placeholder={placeholder}/>
            <Button variant='contained' onClick={funcButton} className={classes.button}>{buttonLabel}</Button>
        </form>
    )
}

export default BasicForm
