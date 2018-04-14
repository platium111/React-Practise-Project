import React from 'react';
import './Person.css';
import Radium, {StyleRoot} from 'radium'
// props mean properties
const person = (props) => {
    // 4.9 changed here
    const style = {
        '@media (min-width:500px' : {
            width: '450px'
        }
    };

    return (       
        // changed here 3.7
        // 4.9 changed here
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} year old!</p>
            <p>{props.children}</p>
            {/* change below code with onChange & value */}
            {/* if have value={...} -> default value displayed when starting */}
            <input onChange={props.changed} value={props.name} /> 
        </div>
    )
};

export default Radium(person);