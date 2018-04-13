//3.4-states-manipulating-data
// -> change data from inside, not hard code from elements
// if state change, component automatically render
// -> event: https://reactjs.org/docs/events.html#supported-events
import React, { Component } from 'react';
import './App.css';
// -> can be any name ~ human but need the same when using tag
// but should uppercase
import Person from './Person/Person';
//registerServiceWork: for caching - dont need to touch on this file
class App extends Component {
  
  state = {
    persons: [
      { name: 'Max', age:28},
      { name: 'Hiep', age:29},
      { name: 'Huy', age:30}
    ]
  }

  switchNameHandler = () => {
    // console.log('was clicked!');
    // NOT DO THIS this.state.persons[0].name = 'Quang Hiep';
    this.setState({
      persons: [
        { name: 'Maximum', age:28},
        { name: 'Hiep', age:29},
        { name: 'Huy', age:33}
      ]
    })
  }

  render() {
    return (
      //just use in one root div App
      <div className="App">
        <h1> Hi, I am Hiep coding React app </h1>
        <p>this is awesome</p>
        {/* -> Don't use switchNameHandler() because it will run instancely after rendering */}
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    
    //1st: element div, 2nd default null, 3st may be text or maybe element
    // -> this code is not in used, compared to code above which is JSX
    return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I am Hiep'));
  }
}

export default App;
