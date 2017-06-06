import React from 'react';
import Helloworld from './Helloworld';
import GreetingsUdion from './GreetingsUdion';
import Observations from './Observations';
import Greetings from './Greetings'
import './App.css';


const App = ()=> {
  return(
    <div className="App">
      <Helloworld/>
      <GreetingsUdion/>
      <Greetings name="uddeshya"/>
      <Greetings name="name1"/>
      <Greetings name="name2"/>
      <Observations/>
    </div>
  );
};

export default App;
