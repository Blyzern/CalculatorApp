import React, { useState } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { Display } from '../Display';
import './Calculator.css';

const numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/', '.'];

const CalculatorComponent = () =>{
    const [calc, setCalc] = useState("");
  
    const handleClick = (e) => {
        let value = e.target.value;

        for (let i = 0; i < operators.length; i++) {
            const nomeCondizione = calc.charAt(calc.length -1) === operators[i] && value === operators[i]
            if (calc.charAt(calc.length -1) !== '-' && value === operators[i]&& value !== '-' && (calc.charAt(calc.length -1) === '+' || calc.charAt(calc.length -1) === '*' || calc.charAt(calc.length -1) === '/')) {
                return;
            }
            if(nomeCondizione){
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

    return (
        <div className='calculatorContainer'>
            {<Display value={calc} />}
            {operators.map((item, index) => <CustomButton key={index} text={item} onClick={handleClick} customClass={'operator'} />)}
            <button className='operator' onClick={ clear }>DEL</button>
            <button className='operator' onClick={ equal }>=</button>
            {numbers.map((item, index) => <CustomButton  text={item} onClick={handleClick} customClass='calculatorButtons'/>)}
        </div>
       );
    }


export const Calculator = () => {
    return CalculatorComponent();
}