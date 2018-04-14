import React from 'react';
// 4.3 changed here
import classes from './Person.css';
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
        // 4.3 changed here
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} year old!</p>
            <p>{props.children}</p>
            {/* change below code with onChange & value */}
            {/* if have value={...} -> default value displayed when starting */}
            <input onChange={props.changed} value={props.name} /> 
        </div>
    )
};

export default person;