import Death from './Death';
import Alive from './Alive';
import React from 'react';


const DeathOrAlive = ({ username, userListDeath, currentBoard, indexBoardAdv}) => {
    if (userListDeath?.map(_user => _user.username).includes(username))
      return (<Death key={`${username}-death-${indexBoardAdv}`} />);
    else
      return (<>{currentBoard.map((row, indexRow) => (<Alive row={row} key={`${indexBoardAdv}-${indexRow}`} keyFather={`${indexBoardAdv}-${indexRow}`}/>))}</>);
  }

  export default React.memo(DeathOrAlive);