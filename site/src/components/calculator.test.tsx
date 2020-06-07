import { render, screen } from "@testing-library/react";
import React from "react";
import Calculator from "./calculator";

describe("Calculator", () => {
    it("should render", () => {
        render(<Calculator />);
        const calculatorRoot = screen.getByTestId("calculatorRoot");
        expect(calculatorRoot).toBeInTheDocument();
    });
});