/// <reference types="cypress" />

describe("Simple Calculator", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-table"]').click();
  });

  context("When the number is 4", () => {
    it("Should access the Factorial page", () => {
      cy.get('[data-testid="input-rows"]').clear().type("4");
    });
    it("Should click the button to get the result", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should the first result be 4", () => {
      cy.get('[data-testid="result-1"]').should("have.text", 4);
    });
    it("Should the first result be 8", () => {
      cy.get('[data-testid="result-2"]').should("have.text", 8);
    });
    it("Should the first result be 12", () => {
      cy.get('[data-testid="result-3"]').should("have.text", 12);
    });
    it("Should the first result be 16", () => {
      cy.get('[data-testid="result-4"]').should("have.text", 16);
    });
    it("Should the first result be 20", () => {
      cy.get('[data-testid="result-5"]').should("have.text", 20);
    });
    it("Should the first result be 24", () => {
      cy.get('[data-testid="result-6"]').should("have.text", 24);
    });
    it("Should the first result be 28", () => {
      cy.get('[data-testid="result-7"]').should("have.text", 28);
    });
    it("Should the first result be 32", () => {
      cy.get('[data-testid="result-8"]').should("have.text", 32);
    });
    it("Should the first result be 36", () => {
      cy.get('[data-testid="result-9"]').should("have.text", 36);
    });
    it("Should the first result be 40", () => {
      cy.get('[data-testid="result-10"]').should("have.text", 40);
    });
  });

  context("When the number is 6", () => {
    it("Should access the Factorial page", () => {
      cy.get('[data-testid="input-rows"]').clear().type("6");
    });
    it("Should click the button to get the result", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should the first result be 6", () => {
      cy.get('[data-testid="result-1"]').should("have.text", 6);
    });
    it("Should the first result be 12", () => {
      cy.get('[data-testid="result-2"]').should("have.text", 12);
    });
    it("Should the first result be 18", () => {
      cy.get('[data-testid="result-3"]').should("have.text", 18);
    });
    it("Should the first result be 24", () => {
      cy.get('[data-testid="result-4"]').should("have.text", 24);
    });
    it("Should the first result be 30", () => {
      cy.get('[data-testid="result-5"]').should("have.text", 30);
    });
    it("Should the first result be 36", () => {
      cy.get('[data-testid="result-6"]').should("have.text", 36);
    });
    it("Should the first result be 42", () => {
      cy.get('[data-testid="result-7"]').should("have.text", 42);
    });
    it("Should the first result be 48", () => {
      cy.get('[data-testid="result-8"]').should("have.text", 48);
    });
    it("Should the first result be 54", () => {
      cy.get('[data-testid="result-9"]').should("have.text", 54);
    });
    it("Should the first result be 60", () => {
      cy.get('[data-testid="result-10"]').should("have.text", 60);
    });
  });
});
