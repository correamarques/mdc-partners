/// <reference types="cypress" />

describe("Factorial", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-factorial"]').click();
  });
  context("When the number is 4 the factorial should be 24", () => {
    it("Should type the number 4", () => {
      cy.get('[data-testid="number"]').type("4");
    });
    it("Should click on calculate", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be 24", () => {
      cy.get('[data-testid="result"]').should("have.value", "24");
    });
  });
  context("When the number is 8 the factorial should be 40320", () => {
    it("Should type the number 8", () => {
      cy.get('[data-testid="number"]').clear().type("8");
    });
    it("Should click on calculate", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be 40320", () => {
      cy.get('[data-testid="result"]').should("have.value", "40320");
    });
  });
  context("When the number is 10 the factorial should be 3628800", () => {
    it("Should type the number 10", () => {
      cy.get('[data-testid="number"]').clear().type("10");
    });
    it("Should click on calculate", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be 3628800", () => {
      cy.get('[data-testid="result"]').should("have.value", "3628800");
    });
  });
});
