import { createYield } from "typescript";

describe("Given we are on the homepage", () => {
    describe("and we can see the calculator", () => {
        describe("When we add 1 to 1", () => {
                it("Then it should display the result 2", () => {
                    cy.visit("/");
                    cy.get('#oneButton').click();
                    cy.get('#plusButton').click();
                    cy.get('#oneButton').click();
                    cy.get('#equalsButton').click();
                    cy.get('#calculationDisplay').should("contain", "1 + 1 = 2");
                });
            });
        });
    });
});