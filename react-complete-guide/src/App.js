import React, { Component } from 'react';
import Person from './Person/Person';
import clas from './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'dsa ', name: 'Max', age: 28 },
      { id: 'das', name: 'Manu', age: 29 },
      { id: 'czx', name: 'Vali', age: 32 }
    ],
    showPersons: false
  };

  deletePersonHandler = index => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const pers = [...this.state.persons];
    pers[personIndex] = person;

    this.setState({
      persons: pers
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = clas.Red;
    }
    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(clas.red); //classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push(clas.bold); //classes = ['red bold']
    }

    return (
      <div className={clas.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
