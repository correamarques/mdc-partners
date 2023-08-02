import { render, screen } from "../utils/test-utils";
import PrimeNumbers from "./PrimeNumbers";

const renderPage = () => {
  return render(<PrimeNumbers />);
};

describe("PrimeNumbers", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Prime Numbers");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Write a function that checks whether a number is prime or not. Then create a program that prints the first 10 prime numbers.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to type a number", () => {
    renderPage();
    const input = screen.getByTestId("number");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Type number here");
  });

  it("Should have a button to check if number is prime or not", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Is prime?");
  });

  it("Should have input to display the result", () => {
    renderPage();
    const input = screen.getByTestId("result");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });

  it("Should have a button to print the first 10 prime numbers", () => {
    renderPage();
    const button = screen.getByTestId("print-prime-numbers");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Print the first 10 prime numbers");
  });

  it("Should have input to display the first 10 prime numbers", () => {
    renderPage();
    const input = screen.getByTestId("prime-numbers");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
