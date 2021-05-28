import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
    return (
        <div 
        className={classes.button}
        onClick={props.onClick}
        data-size={props.size}
        data-value={props.value}
        >
            {props.label}
        </div>
    )
}

export default Button;
