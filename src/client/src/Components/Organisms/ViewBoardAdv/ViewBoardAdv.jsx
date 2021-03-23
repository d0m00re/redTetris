import React from 'react';
import TetrisRowAdv from '../../Molecules/TetriRowAdv/TetriRowAdv'

import { makeStyles } from '@material-ui/core/styles';

import skull from './../../../ressource/svg/skull.svg'

const useStyles = makeStyles({
  root: {
    //backgroundColor : '#333',
    border: '1px solid black',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const Alive = ({className, row, indexRow}) => {
  return (
  <div className={className} key={"rowrow" + indexRow}>
    <TetrisRowAdv row={row} indexRow={indexRow}></TetrisRowAdv>
  </div>);
}
 
const Death = ({className, key}) => {
  return (
    <div className={className} key={key}>
      <img src={skull} alt="player death" />
    </div>
  )
}

const DeathOrAlive = ({username, usersDeath, currentBoard, className, row}) => {
  console.log('user death')
  console.log(usersDeath)
  if (usersDeath?.includes(username)) 
    return (<Death className={className} key={`${username}-death`}/>);
  else
      return (<>{currentBoard.map((row, indexRow) => (<Alive className={className} row={row} indexRow={indexRow}/>))}</>);
} 

const ViewBoardAdv = ({ currentBoard, usersDeath, username }) => {
  const styles = useStyles();
  return (
    <>
      {/*}
       <img src={skull} alt="player death" />
     */}
      <div className={styles.root}>
          <DeathOrAlive username={username} currentBoard={currentBoard} usersDeath={usersDeath} className={styles.flexRow} />
      </div>
    </>
  )
}

export default ViewBoardAdv
 