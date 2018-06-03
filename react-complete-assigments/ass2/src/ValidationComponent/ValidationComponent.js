import React from 'react';

const validationComponent = props => {
  let message = props.charNumbers < 5 ? 'Text too short' : 'Text long enough';

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default validationComponent;
