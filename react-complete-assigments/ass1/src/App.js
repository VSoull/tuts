import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    userName: 'Valentin'
  };

  changeUserNameHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        {/* <UserInput changed={this.changeUserNameHandler} userName={this.state.userName.bind(this)} /> */}
        <UserInput changed={this.changeUserNameHandler} name={this.state.userName} />
      </div>
    );
  }
}

export default App;
