import './App.css';
import React from "react";
import MexiMap from './MexiMap';
import NavBar from './Components/NavBar';

  class App extends React.Component{
  render() {
    return(

        <div className="App">   
          <NavBar/>
          <h1>Reshiram</h1>
          <MexiMap/>
        </div>
      
    )
  }
}


export default App