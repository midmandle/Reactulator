import { render } from "@testing-library/react";

describe("calculator", () => {
    it("should render", () => {
        const { getByTestId } = render(<Calculator/>);
        const calculatorRoot = getByTestId("[data-test-id='calculatorRoot']");
        expect(calculatorRoot).toBeInTheDocument();
    })
})