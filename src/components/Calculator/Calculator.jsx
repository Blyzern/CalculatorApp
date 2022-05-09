import React from 'react';

function addValue(number)
{
    if(number === '.' || (number >= 0 && number <= 9))
    {
        console.log(number);
    }
}

export const Calculator = ({text}) => {
    return <button className='calculatorButtons' onClick={() => addValue(text)}>{text}</button>
};