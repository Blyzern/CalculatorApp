import React, { useState } from "react";
import { CustomButton } from "../CustomButton/CustomButton";
import { Display } from "../Display";
import "./Calculator.css";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ["+", "-", "*", "/", "."];

const CalculatorComponent = () => {
  const [calc, setCalc] = useState("");
  const [secondCalc, setSecondCalc] = useState("");
  const [ops, setOps] = useState("");

  const handleNumber = (e) => {
    let value = e.target.value;
    ops === "" ? setCalc(calc + value) : setSecondCalc(secondCalc + value);
  };

  const handleOperator = (e) => {
    let value = e.target.value;
    const dot = value === ".";
    if (calc === "-" || secondCalc === "-") {
      return;
    }
    if (value !== dot && secondCalc === "") {
      if (ops === "" && calc === "") {
        setCalc(value);
        return;
      }

      if (ops === "-" && secondCalc === "") {
        setSecondCalc(value);
      }

      setOps(value);
      console.log("called");
    }

    if (secondCalc !== "") {
      equal();
      setOps(value);
      return;
    }
  };

  const clear = () => {
    setCalc("");
    setSecondCalc("");
    setOps("");
  };
  const equal = () => {
    switch (ops) {
      case "+":
        setCalc(Number(calc) + Number(secondCalc));
        break;
      case "-":
        setCalc(Number(calc) - Number(secondCalc));
        break;
      case "*":
        setCalc(Number(calc) * Number(secondCalc));
        break;
      case "/":
        setCalc(Number(calc) / Number(secondCalc));
        break;
      default:
        break;
    }
    setSecondCalc("");
    setOps("");
  };

  return (
    <div className="calculatorContainer">
      {<Display value={calc} clickedOperator={ops} secondValue={secondCalc} />}
      {operators.map((item, index) => (
        <CustomButton
          key={item}
          text={item}
          onClick={handleOperator}
          customClass={"operator"}
        />
      ))}
      {<CustomButton text={"DEL"} onClick={clear} customClass={"operator"} />}
      {numbers.map((item, index) => (
        <CustomButton
          key={item}
          text={item}
          onClick={handleNumber}
          customClass="calculatorButtons"
        />
      ))}
      {<CustomButton text={"="} onClick={equal} customClass={"operator"} />}
    </div>
  );
};

export const Calculator = () => {
  return CalculatorComponent();
};
