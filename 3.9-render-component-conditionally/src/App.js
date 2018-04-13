//3.9-render-component-conditionally
// -> req: click in button and show component

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
    ],
    showPerson: false
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!');
    // NOT DO THIS this.state.persons[0].name = 'Quang Hiep';
    this.setState({
      persons: [
        { name: newName, age:28},
        { name: 'Hiep', age:29},
        { name: 'Huy', age:33}
      ]
    })
  }

  // changed here
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age:28},
        { name: event.target.value, age:29},
        { name: 'Huy', age:33}
      ]
    })
  }

  //3.9 changed here
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  render() {
    //3.8 changed here
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      //just use in one root div App
      <div className="App">
        <h1> Hi, I am Hiep coding React app </h1>
        <p>this is awesome</p>
        {/* (1) using error function and pass value */}
        {/* 3.9 changed here */}
        <button 
          style={style}
          onClick={this.togglePersonHandler}>Switch name</button>
        { this.state.showPerson === true ?
          <div> 
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}/>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              // (2) recommend- using bind to pass value
              click={this.switchNameHandler.bind(this, 'Chuanman!!')}
              changed={this.nameChangedHandler}/>
              {/* changed here */}
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}/>  
          </div> : null
        }
      </div>
    );
    
    //1st: element div, 2nd default null, 3st may be text or maybe element
    // -> this code is not in used, compared to code above which is JSX
    return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I am Hiep'));
  }
}

export default App;
