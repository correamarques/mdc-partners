import { render, screen } from "../utils/test-utils";
import Palindrome from "./Palindrome";

const renderPage = () => {
  return render(<Palindrome />);
};

describe("PrimeNumbers", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Palindrome");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Create a function that checks whether a word is a palindrome (that is, whether it reads the same backwards and forwards). The program must ask the user for a word and inform whether or not it is a palindrome.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to type the word", () => {
    renderPage();
    const input = screen.getByTestId("palindrome");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute(
      "placeholder",
      "Type the word of phrase here"
    );
  });

  it("Should have a button to check if the text is palindrome", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Is palindrome?");
  });

  it("Should have input to display the result", () => {
    renderPage();
    const input = screen.getByTestId("result");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
