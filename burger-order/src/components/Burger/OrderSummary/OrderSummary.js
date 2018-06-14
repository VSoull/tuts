import React, { Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  //Could be afunctional component, doesn t have to be a class
  componentWillUpdate() {
    console.log('[OrderSummary]');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the fallowing ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>
            Total Price:
            {this.props.price.toFixed(2)}
          </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchasedContinue}>
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
