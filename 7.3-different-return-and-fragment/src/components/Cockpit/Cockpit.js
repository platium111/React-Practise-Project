import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';
const cockpit = (props) => {
    // 4.3 changed here
    let assgignedClasses = [];
    let btnClass = classes.Button;
    //7.3
    if(props.showPerson) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    
    if(props.persons.length <= 2) {
      assgignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assgignedClasses.push(classes.bold);
    }

    return (
      //7.3 I can delete contain <div> but I just only use separated style for element
        <Aux>
        {/* <div className={classes.Cockpit}> */}
          <h1> Hi, I am Hiep coding React app </h1>
          {/* 4.1 changed here */}
          <p className={assgignedClasses.join(' ')}>this is awesome</p>
          {/* (1) using error function and pass value */}
          {/* 3.9 changed here */}
          <button 
            className={btnClass}
            onClick={props.clicked}>Switch name
          </button>
        {/* </div> */}
        </Aux>
    );
}

export default cockpit;