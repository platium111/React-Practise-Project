import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('Persons.js inside constructor');
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
        console.log('Persons.js component will mount');
    }

    componentDidMount() {
        console.log('Persons.js inside component did mount');
    }

    render() {
        console.log('Persons.js inside render() method');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}
export default Persons;
