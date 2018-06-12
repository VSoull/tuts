import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      console.log('igkey++ ', igKey);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // use console.log to see what hapens
        console.log('igkey+ i', igKey + i);
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
      //[ , ]
    })
    .reduce((prevVal, currentValue) => {
      return prevVal.concat(currentValue);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients.</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
