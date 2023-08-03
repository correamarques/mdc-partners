/// <reference types="cypress" />

describe("Simple Calculator", () => {
  before(() => {
    cy.visit("/");
    cy.get('[data-testid="nav-simple-calculator"]').click();
  });

  context(
    "When the first number is 10, second number is 20 and operator is addition the result should be 30",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("10");
      });
      it("Should type the addition operator", () => {
        cy.get('[data-testid="operator"]').clear().type("+");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("20");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 30", () => {
        cy.get('[data-testid="result"]').should("have.value", "30");
      });
    }
  );

  context(
    "When the first number is 2345, second number is 98753 and operator is addition the result should be 101098",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("2345");
      });
      it("Should type the addition operator", () => {
        cy.get('[data-testid="operator"]').clear().type("+");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("98753");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 101098", () => {
        cy.get('[data-testid="result"]').should("have.value", "101098");
      });
    }
  );

  context(
    "When the first number is 10, second number is 20 and operator is multiplication the result should be 200",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("10");
      });
      it("Should type the multiplication operator", () => {
        cy.get('[data-testid="operator"]').clear().type("*");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("20");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 200", () => {
        cy.get('[data-testid="result"]').should("have.value", "200");
      });
    }
  );

  context(
    "When the first number is 89, second number is 234 and operator is multiplication the result should be 20826",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("89");
      });
      it("Should type the multiplication operator", () => {
        cy.get('[data-testid="operator"]').clear().type("*");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("234");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 20826", () => {
        cy.get('[data-testid="result"]').should("have.value", "20826");
      });
    }
  );

  context(
    "When the first number is 10, second number is 20 and operator is subtraction the result should be 200",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("10");
      });
      it("Should type the subtraction operator", () => {
        cy.get('[data-testid="operator"]').clear().type("-");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("20");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be -10", () => {
        cy.get('[data-testid="result"]').should("have.value", "-10");
      });
    }
  );

  context(
    "When the first number is 20938402934, second number is 828234 and operator is subtraction the result should be 20937574700",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("20938402934");
      });
      it("Should type the subtraction operator", () => {
        cy.get('[data-testid="operator"]').clear().type("-");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("828234");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 20937574700", () => {
        cy.get('[data-testid="result"]').should("have.value", "20937574700");
      });
    }
  );

  context(
    "When the first number is 10, second number is 20 and operator is division the result should be 0.5",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("10");
      });
      it("Should type the division operator", () => {
        cy.get('[data-testid="operator"]').clear().type("/");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("20");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 0.5", () => {
        cy.get('[data-testid="result"]').should("have.value", "0.5");
      });
    }
  );

  context(
    "When the first number is 1998, second number is 3 and operator is division the result should be 666",
    () => {
      it("Should type the first number", () => {
        cy.get('[data-testid="number-one"]').clear().type("1998");
      });
      it("Should type the division operator", () => {
        cy.get('[data-testid="operator"]').clear().type("/");
      });
      it("Should type the second number", () => {
        cy.get('[data-testid="number-two"]').clear().type("3");
      });
      it("Should click the button to get the result", () => {
        cy.get('[data-testid="button"]').click();
      });
      it("Should result be 666", () => {
        cy.get('[data-testid="result"]').should("have.value", "666");
      });
    }
  );
});
