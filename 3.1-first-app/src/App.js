//4.2-using-radium-with-media-query
// -> it is used for inline style code bz normally if
// we use App.css, it means globally, we can code button:hover style (sudo selector)
// but for inner style, we can't code like that -> using Radium, which for sudo selector

import React, { Component } from 'react';
import './App.css';
// -> can be any name ~ human but need the same when using tag
// but should uppercase
import Person from './Person/Person';
//registerServiceWork: for caching - dont need to touch on this file
class App extends Component {
  
  state = {
    persons: [
      {id: 'dsadasf', name: 'Max', age:28},
      {id: 'vsdfsd', name: 'Hiep', age:29},
      {id: 'dddvv', name: 'Huy', age:30}
    ],
    showPerson: false // 3.10 changed here
  }

  // 3.11 changed here -> immutable state change
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    
    // const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  //3.9 changed here
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  
  // 3.11 changed here
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // const persons = [...this.state.persons]; // equavalent to make immutable object
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    //3.8 changed here
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    };

    //3.10 changed here
    let persons = null;
    if(this.state.showPerson) {
      persons = (
        <div> 
          {/* 3.11 changed here
          -> key need to be unique -> it may be index or id in data
          -> change deletePersonHandler
          -> change nameChangeHandler
          */}
          
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // 4.1 changed here
      style.backgroundColor = 'red';
      
    }

    // 4.1 changed here
    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      
        <div className="App">
          <h1> Hi, I am Hiep coding React app </h1>
          {/* 4.1 changed here */}
          <p className={classes.join(' ')}>this is awesome</p>
          {/* (1) using error function and pass value */}
          {/* 3.9 changed here */}
          <button 
            style={style}
            onClick={this.togglePersonHandler}>Switch name
          </button>
          {persons}
          
        </div>
      
    );
    
    //1st: element div, 2nd default null, 3st may be text or maybe element
    // -> this code is not in used, compared to code above which is JSX
    return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I am Hiep'));
  }
}

//4.2 changed here
export default App;
