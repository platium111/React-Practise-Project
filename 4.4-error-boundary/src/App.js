//4.4-error-boundary
// -> only use when some code you know it may has errors -> for debugging
import React, { Component } from 'react';
import classes from './App.css'; // 4.3 changed here
// -> can be any name ~ human but need the same when using tag
// but should uppercase
import Person from './Person/Person';
//registerServiceWork: for caching - dont need to touch on this file
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
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
    // 4.3 changed here
    let btnClass = '';

    if(this.state.showPerson) {
      persons = (
        <div> 
          {/* 3.11 changed here
          -> key need to be unique -> it may be index or id in data
          -> change deletePersonHandler
          -> change nameChangeHandler
          */}
          
          {/* 4.4 key need to be outer */}
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                
                changed={(event) => this.nameChangedHandler(event, person.id)} /> 
              </ErrorBoundary>
          })}
        </div>
      );
      // 4.3 access to App.css -> .Red
      btnClass = classes.Red;
    }

    // 4.3 changed here
    let assgignedClasses = [];
    if(this.state.persons.length <= 2) {
      assgignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assgignedClasses.push(classes.bold);
    }

    return (
        // 4.3 changed here using .App class
        <div className={classes.App}>
          <h1> Hi, I am Hiep coding React app </h1>
          {/* 4.1 changed here */}
          <p className={assgignedClasses.join(' ')}>this is awesome</p>
          {/* (1) using error function and pass value */}
          {/* 3.9 changed here */}
          <button 
            className={btnClass}
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
