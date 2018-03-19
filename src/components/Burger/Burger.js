import React from 'react';
import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
            .map((igKey, i) => {
                //console.log(igKey, i);
                return [...Array(props.ingredients[igKey])].map((key, index) => {
                    return  <BurgerIngredient key={igKey + index} type={igKey} />
                });
            })
            .reduce((arr, oldEl) => {
               return arr.concat(oldEl);
            }, []);
    //console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p> Please add some ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            { transformedIngredients }
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default Burger;