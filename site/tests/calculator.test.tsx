import { render, screen } from "@testing-library/react";
import React from "react";
import Calculator from "../src/components/calculator";

describe("calculator", () => {
    it("should render", () => {
        render(<Calculator/>);
        const calculatorRoot = screen.getByTestId("calculatorRoot");
        expect(calculatorRoot).toBeTruthy();
    })
})