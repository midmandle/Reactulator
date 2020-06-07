import React from 'react';

export const mockCalculatorDisplayConstructor = jest.fn().mockImplementation((props, context) => {
    return (
        <div data-testid="calculatorDisplay"></div>
    )
})

const CalculatorDisplay = mockCalculatorDisplayConstructor;
export default CalculatorDisplay;