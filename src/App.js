import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Jane', age: 18},
      {name: 'John', age: 42},
      {name: 'Kate', age: 51}
    ]
  }

  switchNameHandler = () => {
    console.log('Button was clicked!');
    this.setState({
      persons: [
        {name: 'Maximilian', age: 23},
        {name: 'Jan', age: 23},
        {name: 'Pockemon', age: 50},
        {name: 'Katrine', age: 20}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>It is really working!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/> 
      </div>
    );
  }
} 

export default App;
