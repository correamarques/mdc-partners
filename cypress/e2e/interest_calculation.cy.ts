/// <reference types="cypress" />

describe("Interest Calculation", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-interest-calculation"]').click();
  });
  context(
    "When the investment has initial capital of 1000, interest rate is 5 and 12 months of investment time the result should 1795.86",
    () => {
      it("Should type the initial capital", () => {
        cy.get('[data-testid="initialCapital"]').type("1000");
      });
      it("Should type the interest rate", () => {
        cy.get('[data-testid="interestRate"]').type("5");
      });
      it("Should type the months", () => {
        cy.get('[data-testid="investimentTime"]').type("12");
      });
      it("Should click the button to calc investment", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 20", () => {
        cy.get('[data-testid="result"]').should("have.value", 1795.86);
      });
    }
  );
});
