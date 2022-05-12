import React from "react";

export const Display = ({ value }) => {
    return(
    <div className='calculatorDisplay'>
    {value || '0'}
    </div>
    );
}