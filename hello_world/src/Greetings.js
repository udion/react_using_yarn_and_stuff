//This is a more generalised version of GreetingsUdion which accepts name as prop
import React from 'react';
import './Greetings.css';

const Greetings = (params) => {
  return (
    <div className="Greetings">
      greetings from {params.name}!
    </div>
  );
};

export default Greetings;
