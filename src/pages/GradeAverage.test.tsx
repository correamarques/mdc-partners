import { render, screen } from "../utils/test-utils";
import GradeAverage from "./GradeAverage";

const renderPage = () => {
  return render(<GradeAverage />);
};

describe("GradeAverage", () => {
  it("Should render the component", () => {
    renderPage();
  });

  it("Should have title", () => {
    renderPage();
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Grade Average");
  });

  it("Should have description about how to use the page", () => {
    renderPage();
    const description = screen.getByTestId("description");
    expect(description).toBeInTheDocument();
    const expectedDescription =
      "Create a program that takes a student's grades in three different subjects and calculates the average of the grades. Then display the calculated average.";
    expect(description).toHaveTextContent(expectedDescription);
  });

  it("Should have a input to type grade 1", () => {
    renderPage();
    const input = screen.getByTestId("grade-1");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("placeholder", "Type number here");
  });
  it("Should have a input to type grade 2", () => {
    renderPage();
    const input = screen.getByTestId("grade-2");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("placeholder", "Type number here");
  });
  it("Should have a input to type grade 3", () => {
    renderPage();
    const input = screen.getByTestId("grade-3");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveAttribute("placeholder", "Type number here");
  });

  it("Should have a button to calc the average of grades", () => {
    renderPage();
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Calc average");
  });

  it("Should have input to display the result", () => {
    renderPage();
    const input = screen.getByTestId("result");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("disabled");
  });

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
