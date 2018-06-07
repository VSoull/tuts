import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux'


const cockpit = (props) => {
    let assignedClass = [];

    let btnClass = classes.Button;
    if ( props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if ( props.persons.length <= 2) {
        assignedClass.push(classes.red); //classes = ['red']
    }

    if ( props.persons.length <= 1) {
        assignedClass.push(classes.bold); //classes = ['red bold']
    }

    return (
        <React.Fragment>
            <h1>{props.appTitle}</h1>
            <p className={assignedClass.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </React.Fragment>
    );
}
       

export default cockpit;