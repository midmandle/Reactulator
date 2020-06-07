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
        const numberOneButton = screen.getByTestId("numberOneButton");
        userEvent.click(numberOneButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "1"},{});
    });
    it("should display '2' when clicking '2'", () => {
        const numberTwoButton = screen.getByTestId("numberTwoButton");
        userEvent.click(numberTwoButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "2"},{});
    });
    it("should display '3' when clicking '3'", () => {
        const numberThreeButton = screen.getByTestId("numberThreeButton");
        userEvent.click(numberThreeButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "3"},{});
    });
    it("should display '4' when clicking '4'", () => {
        const numberFourButton = screen.getByTestId("numberFourButton");
        userEvent.click(numberFourButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "4"},{});
    });
    it("should display '5' when clicking '5'", () => {
        const numberFiveButton = screen.getByTestId("numberFiveButton");
        userEvent.click(numberFiveButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "5"},{});
    });
    it("should display '6' when clicking '6'", () => {
        const numberSixButton = screen.getByTestId("numberSixButton");
        userEvent.click(numberSixButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "6"},{});
    });
    it("should display '7' when clicking '7'", () => {
        const numberSevenButton = screen.getByTestId("numberSevenButton");
        userEvent.click(numberSevenButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "7"},{});
    });
    it("should display '8' when clicking '8'", () => {
        const numberEightButton = screen.getByTestId("numberEightButton");
        userEvent.click(numberEightButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "8"},{});
    });
    it("should display '9' when clicking '9'", () => {
        const numberNineButton = screen.getByTestId("numberNineButton");
        userEvent.click(numberNineButton);
        expect(mockCalculatorDisplayConstructor).toHaveBeenCalledWith({displayText: "9"},{});
    });
});
