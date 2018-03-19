import React from 'react';
import classes from './BuildControl.css'

const BuildControl = (props) => (
    
    <div className={classes.BuildControl}>
        <label className={classes.Label}>{props.label}</label>
        <button className={classes.More} onClick={ props.onAdd } >More</button>
        <button className={classes.Less} onClick={props.onRemove} disabled={props.disabledLess}>Less</button>
    </div>
)

export default BuildControl;