import React, { useState } from "react";
import CalculatorDisplay from "./calculatorDisplay";

const Calculator = () => {
    const [calculation, setCalculation] = useState("");

    const handleOnClickDigitButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const value = event.currentTarget.innerHTML;
        setCalculation(calculation + `${value}`)
    }

    return (
        <div data-testid="calculatorRoot">
            <CalculatorDisplay displayText={calculation}></CalculatorDisplay>
            <button data-testid="numberOneButton" onClick={handleOnClickDigitButton}>1</button>
            <button data-testid="numberTwoButton" onClick={handleOnClickDigitButton}>2</button>
            <button data-testid="numberThreeButton" onClick={handleOnClickDigitButton}>3</button>
        </div>
    );
};
export default Calculator;