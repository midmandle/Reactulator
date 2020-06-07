import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import React from "react";
import Calculator from "./calculator";

describe("Calculator", () => {
    it("should render", () => {
        render(<Calculator />);
        const calculatorRoot = screen.getByTestId("calculatorRoot");
        expect(calculatorRoot).toBeInTheDocument();
    });
    it("should display '1' when clicking '1'", () => {
        render(<Calculator />);
        const number1Button = screen.getByTestId("numberOneButton");
        userEvent.click(number1Button);
        const display = screen.getByTestId("calculatorDisplay");
        expect(display).toHaveTextContent('1');
    });
    it("should display '2' when clicking '2'", () => {
        render(<Calculator />);
        const number2Button = screen.getByTestId("numberTwoButton");
        userEvent.click(number2Button);
        const display = screen.getByTestId("calculatorDisplay");
        expect(display).toHaveTextContent('2');
    });
});