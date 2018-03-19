import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';

import BurgerControls from '../../components/Burger/BugerControls/BugerControls';

const INGREDIENTS_PRICE = {
    salad : 0.6
}

class BugerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            cheese: 0,
            meat: 0,
            bacon: 0,
        }
    }

    addIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({
            ingredients: updatedIngredients
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
        this.setState({
            ingredients: updatedIngredients
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
                    disabledRemoveIngrediets = { disabledRemoveIngrediets }
                    removeIngredient={ this.removeIngredientHandle }
                    />
                </div>
            </Aux>
        )
    }
}

export default BugerBuilder;