import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DeathOrAlive from './Components/DeathOrAlive';

import PropTypes from 'prop-types';


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
};

ViewBoardAdv.propTypes = {
  currentBoard : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  userListDeath : PropTypes.object,
  username : PropTypes.string,
  indexBoard : PropTypes.number
};

ViewBoardAdv.defaultProps = {
  currentBoard : Array(20).fill().map(() => Array(10).fill(0)),
  userListDeath : [],
  username : 'd0m',
  indexBoard : 455
};

export default React.memo(ViewBoardAdv);
 