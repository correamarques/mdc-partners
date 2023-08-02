import { render, screen } from "../utils/test-utils";
import { Factorial } from "./Factorial";

const renderPage = () => {
  return render(<Factorial />);
};

describe("Factorial", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Factorial");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Write a function to calculate the factorial of a number. Next, create a program that allows the user to enter a number and displays the corresponding factorial.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to type the number", () => {
    renderPage();
    const input = screen.getByTestId("number");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Type number here");
  });

  it("Should have a input to display the result", () => {
    renderPage();
    const result = screen.getByTestId("result");
    expect(result).toBeInTheDocument();
    expect(result).toHaveAttribute("disabled");
    expect(result).toHaveAttribute(
      "placeholder",
      "The result will appear here"
    );
  });

  it("Should have a button to calculate the factorial", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Calculate");
    expect(button).toHaveAttribute("type", "button");
  });
});
