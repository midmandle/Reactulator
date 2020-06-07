describe("Adding one number to another", () => {
    describe('Given I can see the Calculator', () => {

        beforeEach(() => {
            cy.visit('/');
        });

        describe('When I calculate 1 + 1', () => {

            beforeEach(() => {
                cy.get('#numberOneButton').click();
                cy.get('#numberTwoButton').click();
                cy.get('#equalsButton').click();

            });

            describe('Then', () => {
                it("should display 2", () => {
                    cy.get('#calculatorDisplay').should("contain", "1 + 1 = 2");
                });
            });
        });        
    });
});