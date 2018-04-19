import React, {Component} from 'react';
// 4.3 changed here
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
// import Aux from '../hoc/Aux';

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
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year old!</p>
                <p>{this.props.children}</p>
                <input onChange={this.props.changed} value={this.props.name} /> 
            </Aux>
        )

        //May be use it but not normally
        // return [
        //     <p key='1' onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} year old!</p>,
        //     <p key='2'>{this.props.children}</p>,
        //     <input key='3' onChange={this.props.changed} value={this.props.name} /> 
        // ]           
    }
}

export default withClass(Person, classes.Person);