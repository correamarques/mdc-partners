import { render, screen } from "../utils/test-utils";
import SimpleCalculator from "./SimpleCalculator";

const renderPage = () => {
  return render(<SimpleCalculator />);
};

describe("SimpleCalculator", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Simple Calculator");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Create a calculator that takes two numbers and an operator (+, -, *, /) and returns the result of the operation.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to number one", () => {
    renderPage();
    const input = screen.getByTestId("number-one");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Type number here");
  });

  it("Should have a input to operator", () => {
    renderPage();
    const input = screen.getByTestId("operator");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("maxlength", "1");
    const expectedPlaceholder = "Operators (+, -, *, /)";
    expect(input).toHaveAttribute("placeholder", expectedPlaceholder);
  });

  it("Should have a input to number two", () => {
    renderPage();
    const input = screen.getByTestId("number-two");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Type another number");
  });

  it("Should have a button to calculate", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("=");
  });

  it("Should have input to display the result", () => {
    renderPage();
    const input = screen.getByTestId("result");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
