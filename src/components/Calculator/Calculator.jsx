import React, { useState } from 'react';
import { CustomButton } from '../CustomButton/CustomButton';
import { Display } from '../Display';
import './Calculator.css';

const numbers = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 0];
const operators = ['+', '-', '*', '/','.'];

const CalculatorComponent = () =>{
    const [calc, setCalc] = useState("");
    const [secondCalc, setSecondCalc] = useState("");
    const [ops, setOps] = useState("");
  
    const handleNumber = (e) => {

        let value = e.target.value;
        if(ops === ""){
            setCalc(Number(calc + value));
        }
        else{
            setSecondCalc(Number(secondCalc + value));
        }
    }
    const handleOperator = (e) => {
        let value = e.target.value;
        const minus = value === '-';
        const float = value === '.';
        const calcCheck = (variable) => {
           let temp = Array.from(variable);
            return temp.join().includes('.');
        }
        if(minus){
            if(calc === '' ){
                return setCalc(calc + value);
            }
            else if(ops !== '' && secondCalc === ''){
                return setSecondCalc(value);
            }
        }
        if(float){
            if(ops === '' && !calcCheck(calc)){
            return setCalc(calc + ".");
            }
            else if(ops !== '' && !calcCheck(secondCalc)){
                return setSecondCalc(secondCalc + ".");
            }
            else{
                return;
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
           setSecondCalc("");
           setOps("");
    }
    const equal = () => {

        const sum = ops === "+";
        const sub = ops === "-";
        const mul = ops === "*";
        const div = ops === "/";
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
        setSecondCalc("");
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