import React from 'react';
import TetrisRowAdv from '../../Molecules/TetriRowAdv/TetriRowAdv'

import { makeStyles } from '@material-ui/core/styles';

import skull from './../../../ressource/svg/skull.svg'

import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    height: '120px',
    width : '60px',
    border: '1px solid black',
    margin: '0 auto'
  },

  death: {
   marginTop : '30px',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'block',
    }
  },

  alive: {
  },

  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  }
})

const Alive = ({ row, indexRow }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.alive, classes.flexRow)} key={"rowrow" + indexRow}>
      <TetrisRowAdv row={row} indexRow={indexRow}></TetrisRowAdv>
    </div>);
}

const Death = ({ key }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.death, classes.flexRow)} key={key}>
      <img src={skull} alt="player death" />
    </div>
  )
}

const DeathOrAlive = ({ username, userListDeath, currentBoard, className, row}) => {
  if (userListDeath?.map(_user => _user.username).includes(username))
    return (<Death className={className} key={`${username}-death`} />);
  else
    return (<>{currentBoard.map((row, indexRow) => (<Alive className={className} row={row} indexRow={indexRow} />))}</>);
}

const ViewBoardAdv = ({ currentBoard, userListDeath, username }) => {
  const styles = useStyles();
  return (
    <>
      {currentBoard !== undefined &&
      <div className={styles.root}>
        <DeathOrAlive username={username} currentBoard={currentBoard} userListDeath={userListDeath} className={styles.flexRow} />
      </div>
      }
    </>
  )
}

export default ViewBoardAdv
 