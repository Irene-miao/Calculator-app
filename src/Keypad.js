import classes from './Keypad.module.css';
import React from 'react';

const Keypad = (props) => {
    return (
        <div className={classes.keypad}>
            {props.children}
        </div>
    )
}

export default Keypad;
