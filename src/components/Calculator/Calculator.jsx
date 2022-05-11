import React, { useState } from 'react';
import './Calculator.css';

const CalculatorComponent = () =>{
    const calculatorButtons = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 0, '.','+', '-', '*', '/',];
    const operators = ['+', '-', '*', '/', '.'];
    const [calc, setCalc] = useState("");
  
    const handleClick = (e) => {
        let value = e.target.value;

        for (let i = 0; i < operators.length; i++) {
            if (calc.charAt(calc.length -1) !== '-' && value === operators[i]&& value !== '-' && (calc.charAt(calc.length -1) === '+' || calc.charAt(calc.length -1) === '*' || calc.charAt(calc.length -1) === '/')) {
                return;
            }
            if(calc.charAt(calc.length -1) === operators[i] && value === operators[i]){
                return;
            }
            if(value !== '-' && value !== '.' && value === operators[i] && calc === "0"){
                return;
            }
        }
        if(calc === "0" && value !== '.'){ // make sure to remove the first 0 after an equal() call
            return setCalc(value);
        }
        if(calc.charAt(calc.length -1) === '-'  && value === '-'){
            return setCalc(calc + ' ' + value);
        }
        if (value === '0' && calc === "0") {
            clear();
            return;
        }

        setCalc(calc + value);
        
    }

    const clear = () => {
           setCalc("");
    }
    const equal = () => { 
        setCalc(eval(calc).toString());
    }

    const buttonMaker = () => {
    return calculatorButtons.map((items, index) => (<button key={index} value={items} className='calculatorButtons' onClick={handleClick}>{items}</button>));
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