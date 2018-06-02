import React from 'react';
import './UserInput.css';

const userInput = props => (
  <div className="userInput">
    <input className="userText" type="text" onChange={props.changed} value={props.userName} />
  </div>
);

export default userInput;
