import React, {Component} from 'react';
// 4.3 changed here
import classes from './Person.css';
// this.props mean properties

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('Person.js inside constructor');
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
        console.log('Person.js component will mount');
    }

    componentDidMount() {
        console.log('Person.js inside component did mount');
    }
    render() {
        return (       
            // changed here 3.7
            // 4.3 changed here
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year old!</p>
                <p>{this.props.children}</p>
                {/* change below code with onChange & value */}
                {/* if have value={...} -> default value displayed when starting */}
                <input onChange={this.props.changed} value={this.props.name} /> 
            </div>
        )
    }
}

export default Person;