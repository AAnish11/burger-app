import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';

import BurgerControls from '../../components/Burger/BugerControls/BugerControls';

const INGREDIENTS_PRICE = {
    salad : 0.6,
    meat : 0.4,
    bacon : 0.8,
    cheese : 0.7
}

class BugerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            cheese: 0,
            meat: 0,
            bacon: 0,
        },
        totalPrice: 11
    }

    addIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    removeIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        if (updatedCount < 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
    }

    render() {
        const disabledRemoveIngrediets = { ...this.state.ingredients };
        for (let key in disabledRemoveIngrediets) {
            disabledRemoveIngrediets[key] = disabledRemoveIngrediets[key] <= 0;
        }
        return (
            <Aux>
                <div>
                    <Burger ingredients={this.state.ingredients} />
                </div>
                <div>
                    <BurgerControls 
                    addIngredient={ this.addIngredientHandle }
                    totalPrice= { this.state.totalPrice}
                    disabledRemoveIngrediets = { disabledRemoveIngrediets }
                    removeIngredient={ this.removeIngredientHandle }
                    />
                </div>
            </Aux>
        )
    }
}

export default BugerBuilder;