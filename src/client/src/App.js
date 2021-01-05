import React from "react";
import Store from "./componant/context/Store";

import HomeGame from "./componant/pages/HomeGame";
/*
const GameContext = React.createContext({
  username : 'miaou',
  currentKey : '',
});
*/

/*
let dimBoard = {w : 10, h : 20};
let board = Array(dimBoard.h).fill().map(()=> Array(dimBoard.w))
*/
function App() {
  return (
    <div className="App">
      <Store>
        <HomeGame />
      </Store>
    </div>
  );
}

export default App;
