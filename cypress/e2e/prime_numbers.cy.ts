/// <reference types="cypress" />

describe("Prime Numbers", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-prime-numbers"]').click();
  });
  context("When the number is 3 should the response be yes", () => {
    it("Should type the number 3", () => {
      cy.get('[data-testid="number"]').type("3");
    });
    it("Should check if number is prime", () => {
      cy.get('[data-testid="button"]').click();
    });
    it("Should result be yes", () => {
      cy.get('[data-testid="result"]').should("have.value", "yes");
    });
  });

  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19];

  primeNumbers.forEach((number) => {
    context(`When the number is ${number} should the response be yes`, () => {
      it(`Should type the number ${number}`, () => {
        cy.get('[data-testid="number"]').clear().type(number.toString());
      });
      it("Should check if number is prime", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be yes", () => {
        cy.get('[data-testid="result"]').should("have.value", "yes");
      });
    });
  });

  const notPrimeNumbers = [1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20];

  notPrimeNumbers.forEach((number) => {
    context(`When the number is ${number} should the response be no`, () => {
      it(`Should type the number ${number}`, () => {
        cy.get('[data-testid="number"]').clear().type(number.toString());
      });
      it("Should check if number is prime", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be no", () => {
        cy.get('[data-testid="result"]').should("have.value", "no");
      });
    });
  });

  context(
    "When click in the button Print the first 10 prime numbers should result be 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    () => {
      it("Should click in the button to Print the first 10 prime numbers", () => {
        cy.get('[data-testid="print-prime-numbers"]').click();
      });
      it("Should result be 2, 3, 5, 7, 11, 13, 17, 19, 23, 29", () => {
        cy.get('[data-testid="prime-numbers"]').should(
          "have.value",
          "2, 3, 5, 7, 11, 13, 17, 19, 23, 29"
        );
      });
    }
  );
});
