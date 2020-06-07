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
            <button data-testid="numberFourButton" onClick={handleOnClickDigitButton}>4</button>
            <button data-testid="numberFiveButton" onClick={handleOnClickDigitButton}>5</button>
            <button data-testid="numberSixButton" onClick={handleOnClickDigitButton}>6</button>
            <button data-testid="numberSevenButton" onClick={handleOnClickDigitButton}>7</button>
            <button data-testid="numberEightButton" onClick={handleOnClickDigitButton}>8</button>        
            <button data-testid="numberNineButton" onClick={handleOnClickDigitButton}>9</button>        
        
        </div>
    );
};
export default Calculator;