import React, { useState } from 'react';
import './Calculator.css';

const CalculatorComponent = () =>{
    const calculatorButtons = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 0, '.','+', '-', '*', '/',];
    const operators = ['+', '-', '*', '/', '.'];
    const [calc, setCalc] = useState("");
  
    const handleClick = (e) => {
        for (let i = 0; i < operators.length; i++) {
            if (e.target.value === operators[i] && calc.includes(operators[i])) {
                return;
            }
            if(e.target.value !== '-' && e.target.value === operators[i] && calc === "0"){
                return;
            }
        }
        if (e.target.value === '0' && calc === "0") {
            clear();
            return;
        }
        else{
        setCalc(calc + e.target.value);
        }
    }

    const clear = () => {
           setCalc("");
    }
    const equal = () => { 
        setCalc(eval(calc).toString());
    }

    const buttonMaker = () => {
        let buttons = [];
        for (let i = 0; i < calculatorButtons.length; i++) {
            buttons.push(<button key={i} value={calculatorButtons[i]} className='calculatorButtons' onClick={handleClick}>{calculatorButtons[i]}</button>)
        }
    return buttons;
    }

    return (
        <div className='calculatorContainer'>
            <div className='calculatorDisplay'>
                {calc || '0'}
            </div>
                {buttonMaker()}
                <button className='calculatorButtons' onClick={ clear }>DEL</button>
                <button className='calculatorButtons' onClick={ equal }>=</button>
        </div>
       );
    }


export const Calculator = () => {
    return CalculatorComponent();
}