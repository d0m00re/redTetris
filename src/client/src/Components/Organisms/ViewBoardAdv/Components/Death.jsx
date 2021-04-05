
import React from 'react';

import skull from './../../../../ressource/svg/skull.svg'

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({  
    death: {
     marginTop : '30px',
      '& img': {
        maxWidth: '100%',
        maxHeight: '100%',
        display: 'block',
      }
    },
  
    flexRow: {
      display: 'flex',
      flexDirection: 'row',
    }
  })


const Death = ({ key }) => {
    const classes = useStyles();
  
    return (
      <div className={clsx(classes.death, classes.flexRow)} key={key}>
        <img src={skull} alt="player death" />
      </div>
    )
  }

export default React.memo(Death);