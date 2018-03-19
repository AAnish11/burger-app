import React from 'react';
import classes from './BugerControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
]
const BugerControls = (props) => (
    <div className={classes.BugerControls}>
        Current Price : { props.totalPrice }
        {
           controls.map((control) => {
               return <BuildControl 
                label={control.label} 
                key={control.type} 
                disabledLess={props.disabledRemoveIngrediets[control.type]}
                onAdd={() => { props.addIngredient(control.type) }}
                onRemove={() => { props.removeIngredient(control.type) }}
                />
           })
        }
        
    </div>
);

export default BugerControls;