/* eslint-disable import/first */
jest.mock("./calculatorDisplay");
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import React from "react";
import Calculator from "./calculator";
import mockCalculatorDisplayConstructor from "./calculatorDisplay";


describe("Calculator", () => {
    beforeEach(() => {
        render(<Calculator />);
    })
    it("should render", () => {
        const calculatorRoot = screen.getByTestId("calculatorRoot");
        expect(calculatorRoot).toBeInTheDocument();
    });
    it("should display '1' when clicking '1'", () => {
        const number1Button = screen.getByTestId("numberOneButton");
        userEvent.click(number1Button);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "1"},{});
    });
    it("should display '2' when clicking '2'", () => {
        const number2Button = screen.getByTestId("numberTwoButton");
        userEvent.click(number2Button);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "2"},{});
    });
    it("should display '3' when clicking '3'", () => {
        const number3Button = screen.getByTestId("numberThreeButton");
        userEvent.click(number3Button);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "3"},{});
    });
    it("should display '4' when clicking '4'", () => {
        const number4Button = screen.getByTestId("numberFourButton");
        userEvent.click(number4Button);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "4"},{});
    });
});