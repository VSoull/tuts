import React from 'react';

const charComponent = props => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };

  const myP = {
    padding: '10px',
    backgroundColor: 'peru'
  };
  return (
    <div style={style}>
      <p style={myP} onClick={props.click}>
        {props.letter}
      </p>
    </div>
  );
};

export default charComponent;
