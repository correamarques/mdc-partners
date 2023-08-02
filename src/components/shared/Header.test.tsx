import { render, screen } from "../../utils/test-utils";
import { Header } from "./Header";

describe("Header", () => {
  it("Should have link to Simple Calculator", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-simple-calculator");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/simple-calculator");
    expect(link).toHaveTextContent("Simple Calculator");
  });

  it("Should have link to Prime Numbers", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-prime-numbers");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/prime-numbers");
    expect(link).toHaveTextContent("Prime Numbers");
  });

  it("Should have link to Factorial", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-factorial");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/factorial");
    expect(link).toHaveTextContent("Factorial");
  });

  it("Should have link to Palindrome", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-palindrome");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/palindrome");
    expect(link).toHaveTextContent("Palindrome");
  });

  it("Should have link to Table", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-table");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/table");
    expect(link).toHaveTextContent("Table");
  });

  it("Should have link to Vowel Counter", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-vowel-counter");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/vowel-counter");
    expect(link).toHaveTextContent("Vowel Counter");
  });

  it("Should have link to Grade Average", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-grade-average");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/grade-average");
    expect(link).toHaveTextContent("Grade Average");
  });

  it("Should have link to Interest Calculation", () => {
    render(<Header />);
    const link = screen.getByTestId("nav-interest-calculation");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/interest-calculation");
    expect(link).toHaveTextContent("Interest Calculation");
  });
});
