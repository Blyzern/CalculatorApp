import React from "react";
import './Display.css';

export const Display = ({ value, clickedOperator, secondValue }) => {
    return(
    <div className='calculatorDisplay'>
    {value || 0}
    {clickedOperator || ''}
    {secondValue || ''}
    </div>
    );
}