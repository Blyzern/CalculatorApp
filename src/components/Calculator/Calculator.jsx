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
        (ops === "") ? setCalc(calc + value) : setSecondCalc(secondCalc + value);
    }
    const handleOperator = (e) => {
        let value = e.target.value;
        const minus = value === '-';
        const float = value === '.';
        if(float){
            (ops === '' && calc.includes('.') === false) && setCalc(calc + value);
            (ops !== '' && secondCalc.includes('.') === false) && setSecondCalc(secondCalc + value);
            return;

        }
        (minus && calc === "") ? setCalc(calc + value) : setOps(value);
        (ops !== "") && setSecondCalc(secondCalc + value);
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
        switch(ops){
            case '+':
                setCalc(Number(calc) + Number(secondCalc));
                break;
            case '-':
                setCalc(Number(calc) - Number(secondCalc));
                break;
            case '*':
                setCalc(Number(calc) * Number(secondCalc));
                break;
            case '/':
                setCalc(Number(calc) / Number(secondCalc));
                break;
            default:
                break;

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