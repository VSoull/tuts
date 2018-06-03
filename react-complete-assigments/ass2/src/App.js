import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    inputText: 'one',
    numberChars: 3,
    charList: ['o', 'n', 'e']
  };

  numberCharsHandler = event => {
    this.setState({
      inputText: event.target.value,
      numberChars: event.target.value.length,
      charList: event.target.value.split('')
    });
  };

  deletePosition = index => {
    const newList = [...this.state.charList];
    console.log('test' + newList);
    newList.splice(index, 1);

    const newInputText = newList.join('');

    this.setState({
      inputText: newInputText,
      numberChars: newInputText.length,
      charList: newList
    });
  };

  render() {
    const style = {
      display: 'block',
      width: '30%',
      padding: '25px',
      fontSize: '20px',
      margin: '10px auto',
      border: '2px solid blue',
      boxShadow: '0 2px 3px green'
    };
    let numberOfChars = (
      <div>
        <p>{this.state.numberChars}</p>
      </div>
    );
    let iterator = 0;

    let singleCharComponent = (
      <div>
        {this.state.charList.map((item, index) => {
          console.log(index);
          return <CharComponent letter={item} key={iterator++} click={this.deletePosition.bind(this, index)} />;
        })}
      </div>
    );

    return (
      <div className="App">
        <input
          style={style}
          type="text"
          onChange={event => {
            this.numberCharsHandler(event);
          }}
          value={this.state.inputText}
        />
        {numberOfChars}
        <ValidationComponent charNumbers={this.state.numberChars} />
        {singleCharComponent}
      </div>
    );
  }
}

export default App;
