import React from 'react';
import Helloworld from './Helloworld';
import GreetingsUdion from './GreetingsUdion';
import Observations from './Observations';
import './App.css';


const App = ()=> {
  return(
    <div className="App">
      <Helloworld/>
      <GreetingsUdion/>
      <Observations/>
    </div>
  );
};

export default App;
