/// <reference types="cypress" />

describe("Palindrome", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-palindrome"]').click();
  });
  context("When the word is saias the result should be yes", () => {
    it("Should type the word saias", () => {
      cy.get('[data-testid="palindrome"]').type("saias");
    });
    it("Should click the button to check if is palindrome", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be yes", () => {
      cy.get('[data-testid="result"]').should("have.value", "yes");
    });
  });

  context("When the word is beautiful the result should be no", () => {
    it("Should type the word beautiful", () => {
      cy.get('[data-testid="palindrome"]').clear().type("beautiful");
    });
    it("Should click the button to check if is palindrome", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be no", () => {
      cy.get('[data-testid="result"]').should("have.value", "no");
    });
  });

  context(
    "When the phrase is 'Socorram me subi no onibus em marrocos' the result should be yes",
    () => {
      it("Should type the phrase is Socorram me subi no onibus em marrocos", () => {
        cy.get('[data-testid="palindrome"]')
          .clear()
          .type("socorram me subi no onibus em marrocos");
      });
      it("Should click the button to check if is palindrome", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be yes", () => {
        cy.get('[data-testid="result"]').should("have.value", "yes");
      });
    }
  );
});
