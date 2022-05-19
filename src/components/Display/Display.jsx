import React from "react";
import './Display.css';

export const Display = ({ value, clickedOperator, secondValue }) => {
    return(
    <div className='calculatorDisplay'>
        <span>{value || 0}</span>
        <span>{clickedOperator || ""}</span>
        <span>{secondValue || ""}</span>
    </div>
    );
}