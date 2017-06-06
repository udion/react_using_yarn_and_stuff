import React, { Component } from 'react';
import './Helloworld.css';

class Helloworld extends Component{
  render() {
    return (
      <div className="Helloworld">
        hi {this.params.name}, this division is implemented using class by {this.state.name}
      </div>
    );
  }
  constructor(params){
    super(params);
    this.params = params;
    this.state = {
      greeting: 'Hello',
      name: 'udion'
    };
  }
}

export default Helloworld;
