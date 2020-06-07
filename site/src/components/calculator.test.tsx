import { render, screen } from "@testing-library/react";
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
        const display = screen.getByTestId("calculatorDisplay");
        expect(display).toHaveTextContent('1');
    });
});