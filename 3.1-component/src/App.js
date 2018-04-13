//3.1-component
import React, { Component } from 'react';
import './App.css';
// -> can be any name ~ human but need the same when using tag
// but should uppercase
import Person from './Person/Person';
//registerServiceWork: for caching - dont need to touch on this file
class App extends Component {
  render() {
    return (
      //just use in one root div App
      <div className="App">
        <h1> Hi, I am Hiep coding React app </h1>
        <p>this is awesome</p>
        <Person />
        <Person />
        <Person />
      </div>
    );
    
    //1st: element div, 2nd default null, 3st may be text or maybe element
    // -> this code is not in used, compared to code above which is JSX
    return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I am Hiep'));
  }
}

export default App;
