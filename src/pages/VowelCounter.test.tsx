import { render, screen } from "../utils/test-utils";
import VowelCounter from "./VowelCounter";

const renderPage = () => {
  return render(<VowelCounter />);
};

describe("VowelCounter", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Vowel Counter");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Create a function that counts the number of vowels in a string. The program should ask the user for a sentence and display how many vowels it has.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to type the sentence", () => {
    renderPage();
    const input = screen.getByTestId("sentence");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Type the sentence here");
  });

  it("Should have a button to count how many vowels the sentence has", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("How many vowels?");
  });

  it("Should have input to display the result", () => {
    renderPage();
    const input = screen.getByTestId("result");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });
});
