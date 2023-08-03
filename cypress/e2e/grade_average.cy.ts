/// <reference types="cypress" />

describe("Grade Average", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-grade-average"]').click();
  });
  context(
    "When the grades are all the same the result should be the same",
    () => {
      it("Should type first grade", () => {
        cy.get('[data-testid="grade-1"]').type("10");
      });
      it("Should type second grade", () => {
        cy.get('[data-testid="grade-2"]').type("10");
      });
      it("Should type third grade", () => {
        cy.get('[data-testid="grade-3"]').type("10");
      });
      it("Should click the button to calc average", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 10", () => {
        cy.get('[data-testid="result"]').should("have.value", 10);
      });
    }
  );

  context("When the grades are 10, 20 and 30 the result should be 20", () => {
    it("Should type first grade", () => {
      cy.get('[data-testid="grade-1"]').clear().type("10");
    });
    it("Should type second grade", () => {
      cy.get('[data-testid="grade-2"]').clear().type("20");
    });
    it("Should type third grade", () => {
      cy.get('[data-testid="grade-3"]').clear().type("30");
    });
    it("Should click the button to calc average", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be 20", () => {
      cy.get('[data-testid="result"]').should("have.value", 20);
    });
  });

  context("When the grades are 99, 66 and 14 the result should be 60", () => {
    it("Should type first grade", () => {
      cy.get('[data-testid="grade-1"]').clear().type("99");
    });
    it("Should type second grade", () => {
      cy.get('[data-testid="grade-2"]').clear().type("66");
    });
    it("Should type third grade", () => {
      cy.get('[data-testid="grade-3"]').clear().type("14");
    });
    it("Should click the button to calc average", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be 59.66", () => {
      cy.get('[data-testid="result"]').should("have.value", 60);
    });
  });
});
