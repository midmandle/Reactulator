import { render } from "@testing-library/react";
import React from "react";

describe("calculator", () => {
    it("should render", () => {
        const { getByTestId } = render(<Calculator/>);
        const calculatorRoot = getByTestId("[data-test-id='calculatorRoot']");
        expect(calculatorRoot).toBeInTheDocument();
    })
})