import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import React from "react";
import Calculator from "./calculator";

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
        const display = screen.getByTestId("calculatorDisplay");
        expect(display).toHaveTextContent('1');
    });
    it("should display '2' when clicking '2'", () => {
        const number2Button = screen.getByTestId("numberTwoButton");
        userEvent.click(number2Button);
        const display = screen.getByTestId("calculatorDisplay");
        expect(display).toHaveTextContent('2');
    });
    it("should display '3' when clicking '3'", () => {
        const number3Button = screen.getByTestId("numberThreeButton");
        userEvent.click(number3Button);
        const display = screen.getByTestId("calculatorDisplay");
        expect(display).toHaveTextContent('3');
    });
    it("should display '4' when clicking '3'", () => {
        const number4Button = screen.getByTestId("number4Button");
        userEvent.click(number4Button);
        const display = screen.getByTestId("calculatorDisplay");
        expect(display).toHaveTextContent('4');
    });
});