import React from 'react';

const userOutput = props => {
  const styleOutput = {
    width: '20%',
    backgroundColor: 'aqua',
    padding: '6px',
    margin: '20px auto',
    border: '10px solid black'
  };
  return (
    <div style={styleOutput}>
      <p>Username: {props.userName} #1</p>
      <p>The user!!!</p>
    </div>
  );
};

export default userOutput;
