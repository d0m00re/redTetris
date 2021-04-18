import img from './ressource/background/starsBackground.jpg';
import React from "react";
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${img})` ,height:'100vh', display:'flex', flexDirection:'column', width: '100%'}}>
        <Home />
    </div>
  );
}

export default App;
