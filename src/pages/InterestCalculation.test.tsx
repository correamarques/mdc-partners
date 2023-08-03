import { render, screen } from "../utils/test-utils";
import InterestCalculation from "./InterestCalculation";

const renderPage = () => {
  return render(<InterestCalculation />);
};

describe("InterestCalculation", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Interest Calculation");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Create a function that calculates the final value of an investment based on initial capital, interest rate, and investment time (in months). The program must prompt the user for these values and display the final value.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to type Initial Capital", () => {
    renderPage();
    const input = screen.getByTestId("initialCapital");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("placeholder", "Type Initial Capital");
  });

  it("Should have a input to type Interest Rate", () => {
    renderPage();
    const input = screen.getByTestId("interestRate");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("placeholder", "Type Interest Rate");
  });

  it("Should have a input to type Investiment Time", () => {
    renderPage();
    const input = screen.getByTestId("investimentTime");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute(
      "placeholder",
      "Type Investiment Time (in months)"
    );
  });

  it("Should have a button to calc the investment", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Calc Investment");
  });

  it("Should have input to display the result", () => {
    renderPage();
    const input = screen.getByTestId("result");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
    expect(input).toHaveAttribute("placeholder", "The result will appear here");
  });
});
