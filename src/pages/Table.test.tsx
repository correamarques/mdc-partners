import { render, screen } from "../utils/test-utils";
import Table from "./Table";

const renderPage = () => {
  return render(<Table />);
};

describe("PrimeNumbers", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Table");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Create a program that receives a number from the user and displays the table of that number, from 1 to 10.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to ask a number of rows", () => {
    renderPage();
    const input = screen.getByTestId("input-rows");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "10");
    expect(input).toHaveAttribute(
      "placeholder",
      "Type the number of rows to be generated"
    );
  });

  it("Should have a button to generate Table", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Generate table");
  });

  // it("Should have input to display the result", () => {
  //   renderPage();
  //   const input = screen.getByTestId("result");
  //   expect(input).toBeInTheDocument();
  //   expect(input).toHaveAttribute("disabled");
  // });

  // it("Should have a button to print the first 10 prime numbers", () => {
  //   renderPage();
  //   const button = screen.getByTestId("print-prime-numbers");
  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveTextContent("Print the first 10 prime numbers");
  // });

  // it("Should have input to display the first 10 prime numbers", () => {
  //   renderPage();
  //   const input = screen.getByTestId("prime-numbers");
  //   expect(input).toBeInTheDocument();
  //   expect(input).toHaveAttribute("disabled");
  // });
});
