/// <reference types="cypress" />

describe("Simple Calculator", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-vowel-counter"]').click();
  });

  context("When the sentence is 'asdf' the result should be 1 vowels", () => {
    it("Should access the Factorial page", () => {
      cy.get('[data-testid="sentence"]').clear().type("asdf");
    });
    it("Should click the button to calc investment", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be 1 vowels", () => {
      cy.get('[data-testid="result"]').should("have.value", "1 vowels");
    });
  });

  context(
    "When the sentence is 'beautiful' the result should be 5 vowels",
    () => {
      it("Should access the Factorial page", () => {
        cy.get('[data-testid="sentence"]').clear().type("beautiful");
      });
      it("Should click the button to calc investment", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 5 vowels", () => {
        cy.get('[data-testid="result"]').should("have.value", "5 vowels");
      });
    }
  );
});
