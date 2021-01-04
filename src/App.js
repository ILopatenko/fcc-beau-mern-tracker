import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a new React app</h1>
        <p>This is really working!</p>
        <Person name='Karl' age='24'/>
        <Person name='John' age='19'/>
        <Person name='Kate' age='35'> My hoobies: Racing </Person>
        <Person name='Jane' age='70'/>
      </div>
    );
  }
}
export default App;
