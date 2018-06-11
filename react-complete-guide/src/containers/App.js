import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from '../containers/App.css';
import Auxilliar from '../hoc/Auxilliar';

import withClasss from '../hoc/withClasss';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[UPDATE App.js] Inside getDerivedStateFromProps', nextProps, prevState);

    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log('[App.js] Inside getSnapshotBeforeUpdate()');
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate()');
  }

  state = {
    persons: [
      { id: 'dsa ', name: 'Max', age: 28 },
      { id: 'das', name: 'Manu', age: 29 },
      { id: 'czx', name: 'Vali', age: 32 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
  };

  deletePersonHandler = index => {
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

    person.name = event.target.value;

    const pers = [...this.state.persons];
    pers[personIndex] = person;

    this.setState({
      persons: pers
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return { showPersons: !doesShow, toggleClicked: prevState.toggleClicked + 1 };
    });
  };
  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render()');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
      );
    }

    return (
      <Auxilliar>
        <button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
          login={this.loginHandler}
        />
        <AuthContext.Provider value={this.state.authenticated}>{persons}</AuthContext.Provider>
      </Auxilliar>
    );
  }
}

export default withClasss(App, classes.App);
