import React from 'react';

class userOutput extends React.Component {
  render() {
    const styleOutput = {
      width: '20%',
      backgroundColor: 'aqua',
      padding: '6px',
      margin: '20px auto',
      border: '10px solid black'
    };
    return (
      <div style={styleOutput}>
        <p>{this.props.userName} #1</p>
        <p>{this.props.userName} #2</p>
      </div>
    );
  }
}

export default userOutput;
