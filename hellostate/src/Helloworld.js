import React, { Component } from 'react';
import './Helloworld.css';

class Helloworld extends Component{
  render() {
    return (
      <div className="Helloworld">
        {this.state.greeting} {this.params.name}, {this.state.statement} {this.state.name}
        <br/>
        <button onClick={this.Frenchify}>Frenchify</button>
      </div>
    );
  }
  constructor(params){
    super(params);
    this.params = params;
    this.Frenchify = this.Frenchify.bind(this);
    this.state = {
      greeting: 'Hello',
      name: 'udion',
      statement: 'this division is implemented using class by'
    };
  }
  Frenchify(){
    this.setState({greeting: 'Bonjour',
  statement: 'Cette division est implémentée à l\'aide de la classe par'});
  }
}

export default Helloworld;
