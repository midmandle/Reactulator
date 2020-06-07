import React from 'react';
interface Props {
    calculation: string;
}
const CalculatorDisplay: React.FC<Props> = ({displayText}: Props) => {
    return (
        <div data-testid="calculatorDisplay">
            {displayText}
        </div>
    )
}
export default CalculatorDisplay;