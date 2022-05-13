import React, { useState } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { Display } from '../Display';
import './Calculator.css';

const numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/', '.'];

const CalculatorComponent = () =>{
    let isNegative = false;
    const [calc, setCalc] = useState("");
    const [secondCalc, setSecondCalcalc] = useState("");
    const [ops, setOps] = useState("");
  
    const handleNumber = (e) => {

        let value = e.target.value;
        if(ops === ""){
        setCalc(Math.floor(calc + value));
        }
        else{
        setSecondCalcalc(Math.floor(secondCalc + value));
        }
    }
    const handleOperator = (e) => {
        let value = e.target.value;

        if(value === '-'){
            if(calc === ''){
                return setCalc(value);
            }
            else if(ops === value && secondCalc === ''){
                setSecondCalcalc(secondCalc + "-");
            }
        }
        if(ops === ""){  
         setOps(value);
        }
        if(secondCalc !== ""){
            equal();
            setOps(value);
        }
    }

    const clear = () => {
           setCalc("");
           setCalc("");
           setOps("");
    }
    const equal = () => {

        const sum = ops === "+";
        const sub = ops === "-";
        const mul = ops === "*";
        const div = ops === "/";
        if(isNegative)
        {
            setSecondCalcalc(secondCalc * -1);
        }
        if(sum){
            setCalc(Math.floor(calc + secondCalc));
        }
        if(sub){
            setCalc(Math.floor(calc - secondCalc));
        }
        if(mul){
            setCalc(Math.floor(calc * secondCalc));
        }
        if(div){
            setCalc(Math.floor(calc / secondCalc));
        }
        setSecondCalcalc("");
        setOps("");
    }

    return (
        <div className='calculatorContainer'>
            {<Display value={calc} clickedOperator={ops} secondValue={secondCalc} />}
            {operators.map((item, index) => <CustomButton key={item} text={item} onClick={handleOperator} customClass={'operator'} />)}
            {<CustomButton text={'DEL'} onClick={clear} customClass={'operator'} />}
            {<CustomButton text={'='} onClick={equal} customClass={'operator'} />}
            {numbers.map((item, index) => <CustomButton  key={item} text={item} onClick={handleNumber} customClass='calculatorButtons'/>)}
        </div>
       );
    }


export const Calculator = () => {
    return CalculatorComponent();
}