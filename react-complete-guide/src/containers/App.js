import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from '../containers/App.css';
import WithClass from '../hoc/WitchClass';
import Aux from '../hoc/Aux';

import withClasss from '../hoc/withClasss';

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()' );
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()' );
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
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
    toggleClicked: 0
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
    this.setState( (prevState, props) => { return {showPersons: !doesShow , toggleClicked: prevState.toggleClicked + 1}});
  };

  render() {
    console.log('[App.js] render()' );
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons} 
                  clicked={this.deletePersonHandler} 
                  changed={this.nameChangedHandler}/>
    }
   

    return (
      <Aux>

      <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit 
                appTitle = {this.props.title}
                persons={this.state.persons} 
                showPersons={this.state.showPersons} 
                clicked={this.togglePersonsHandler}/>
        {persons}
      </Aux >
      
    );
  }
}

export default withClasss(App, classes.App);
