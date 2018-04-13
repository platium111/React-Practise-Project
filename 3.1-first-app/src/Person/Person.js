import React from 'react';
import './Person.css';
// props mean properties
const person = (props) => {
    return (
        // changed here 3.7
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} year old!</p>
            <p>{props.children}</p>
            {/* change below code with onChange & value */}
            {/* if have value={...} -> default value displayed when starting */}
            <input onChange={props.changed} value={props.name} /> 
        </div>
    )
};

export default person;