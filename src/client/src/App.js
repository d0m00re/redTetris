import React from "react";
import Home from './componant/pages/Home';

/*
let dimBoard = {w : 10, h : 20};
let board = Array(dimBoard.h).fill().map(()=> Array(dimBoard.w))
*/
function App() {
  return (
    <div className="App" style={{height:'100vh', display:'flex', flexDirection:'column', width: '100%'}}>
        <Home />
    </div>
  );
}

export default App;
