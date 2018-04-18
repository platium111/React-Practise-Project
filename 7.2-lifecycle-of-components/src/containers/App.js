//7.2-lifecycle-of-components
// ->
import React, { Component } from 'react';
import classes from './App.css'; // 4.3 changed here
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
//registerServiceWork: for caching - dont need to touch on this file
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('App.js inside constructor');
    this.state = {
      persons: [
        { id: 'dsadasf', name: 'Max', age: 28 },
        { id: 'vsdfsd', name: 'Hiep', age: 29 },
        { id: 'dddvv', name: 'Huy', age: 30 }
      ],
      showPerson: false // 3.10 changed here
    }
  }

  componentWillMount() {
    console.log('App.js component will mount');
  }

  componentDidMount() {
    console.log('app.js inside component did mount');
  }

  // 3.11 changed here -> immutable state change
  //[todo] words change when typing in Textbox
  // if need event value -> method need (event) in Persons
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
  //[todo] show list when click button
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  // 3.11 changed here
  //[todo] delete Person in list when click into <p>
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // const persons = [...this.state.persons]; // equavalent to make immutable object
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    console.log('app.js inside render()');
    //3.10 changed here
    //[todo->] show list when click button
    let persons = null;

    if (this.state.showPerson) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
        ;
    }
    return (
      // 4.3 changed here using .App class
      <div className={classes.App}>
        <Cockpit
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>

    );

    //1st: element div, 2nd default null, 3st may be text or maybe element
    // -> this code is not in used, compared to code above which is JSX
    // return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'I am Hiep'));
  }
}

//4.2 changed here
export default App;
