import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }, { name: 'Vali', age: 32 }]
  };

  swichNameHandler = newName => {
    this.setState({ persons: [{ name: 'Max', age: 21 }, { name: 'Manu', age: 29 }, { name: newName, age: 32 }] });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [{ name: 'Max', age: 28 }, { name: event.target.value, age: 29 }, { name: 'Valentin', age: 32 }]
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={() => {
            this.swichNameHandler('Valentin Constantin');
          }}
        >
          Switch Name
        </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.swichNameHandler.bind(this, 'V!')}
          changed={this.nameChangeHandler}
        >
          My Hobbies: Raccing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
