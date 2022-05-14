import React, { useState } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { Display } from '../Display';
import './Calculator.css';

const numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/','.'];

const CalculatorComponent = () =>{
    let isNegative = false;
    const [calc, setCalc] = useState("");
    const [secondCalc, setSecondCalcalc] = useState("");
    const [ops, setOps] = useState("");
  
    const handleNumber = (e) => {

        let value = e.target.value;
        if(ops === ""){
        setCalc(Number(calc + value));
        }
        else{
        setSecondCalcalc(Number(secondCalc + value));
        }
    }
    const handleOperator = (e) => {
        let value = e.target.value;
        const minus = value === '-';
        const float = value === '.';

        if(minus){
            if(calc === ''){
                return setCalc(value);
            }
            else if(value === '-' && secondCalc === ''){
                return setSecondCalcalc(value);
            }
        }
        if(float){
            if(ops === ''){
                return setCalc(calc + ".");
            }
            else if(ops !== ''){
                return setSecondCalcalc(secondCalc + ".");
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
            setCalc(Number(calc + secondCalc));
        }
        if(sub){
            setCalc(Number(calc - secondCalc));
        }
        if(mul){
            setCalc(Number(calc * secondCalc));
        }
        if(div){
            setCalc(Number(calc / secondCalc));
        }
        setSecondCalcalc("");
        setOps("");
    }

    return (
        <div className='calculatorContainer'>
            {<Display value={calc} clickedOperator={ops} secondValue={secondCalc} />}
            {operators.map((item, index) => <CustomButton key={item} text={item} onClick={handleOperator} customClass={'operator'} />)}
            {<CustomButton text={'DEL'} onClick={clear} customClass={'operator'} />}
            {numbers.map((item, index) => <CustomButton  key={item} text={item} onClick={handleNumber} customClass='calculatorButtons'/>)}
            {<CustomButton text={'='} onClick={equal} customClass={'operator'} />}
        </div>
       );
    }


export const Calculator = () => {
    return CalculatorComponent();
}