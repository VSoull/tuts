import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div>Build Controlls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
