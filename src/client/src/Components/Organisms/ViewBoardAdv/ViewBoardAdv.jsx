import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DeathOrAlive from './Components/DeathOrAlive';

const useStyles = makeStyles({
  root: {
    height: '120px',
    width : '60px',
    border: '1px solid black',
    margin: '0 auto'
  },


  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  }
})

const ViewBoardAdv = ({ currentBoard, userListDeath, username, indexBoard}) => {
  const styles = useStyles();
  return (
    <>
      {currentBoard !== undefined &&
      <div className={styles.root} key={`BoardAdv-${indexBoard}`}>
        <DeathOrAlive indexBoard={indexBoard} username={username} currentBoard={currentBoard} userListDeath={userListDeath} className={styles.flexRow} />
      </div>
      }
    </> 
  )
}

export default React.memo(ViewBoardAdv);
 