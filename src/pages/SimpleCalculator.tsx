import { Button } from "reactstrap";
import { NavigationBar } from "../components/shared/NavigationBar";
import { useState } from "react";
import "./SimpleCalculator.css";
import Header from "../components/shared/Header";

export default function SimpleCalculator() {
  const [numberOne, setNumberOne] = useState<number>();
  const [numberTwo, setNumberTwo] = useState<number>();
  const [operator, setOperator] = useState<string>();
  const [result, setResult] = useState<number>();

  const handleOperatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const allowedOperators = ["+", "-", "*", "/"];
    setOperator(allowedOperators.includes(value) ? value : "");
  };

  const addition = (x: number, y: number) => setResult(x + y);
  const division = (x: number, y: number) => setResult(x / y);
  const multiplication = (x: number, y: number) => setResult(x * y);
  const subtraction = (x: number, y: number) => setResult(x - y);

  const handleCalculator = () => {
    if (
      numberOne !== undefined &&
      numberTwo !== undefined &&
      operator !== undefined
    ) {
      switch (operator) {
        case "+":
          addition(numberOne, numberTwo);
          break;
        case "/":
          division(numberOne, numberTwo);
          break;
        case "*":
          multiplication(numberOne, numberTwo);
          break;
        default:
          subtraction(numberOne, numberTwo);
      }
    }
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Simple Calculator"
        description="Create a calculator that takes two numbers and an operator (+, -, *, /) and returns the result of the operation."
      />

      <div className="flex-container">
        <input
          type="number"
          name="number-one"
          id="number-one"
          data-testid="number-one"
          placeholder="Type number here"
          defaultValue={numberOne}
          onChange={(e) => setNumberOne(Number(e.target.value))}
          className="numberOne"
        />
        <input
          type="text"
          name="operator"
          id="operator"
          data-testid="operator"
          maxLength={1}
          defaultValue={operator}
          value={operator}
          onChange={handleOperatorChange}
          placeholder="Operators (+, -, *, /)"
          className="operator"
        />
        <input
          type="number"
          name="number-two"
          id="number-two"
          data-testid="number-two"
          placeholder="Type another number"
          defaultValue={numberTwo}
          onChange={(e) => setNumberTwo(Number(e.target.value))}
          className="numberTwo"
        />
        <Button
          color="secondary"
          data-testid="button"
          onClick={handleCalculator}
        >
          =
        </Button>
        <input
          type="text"
          data-testid="result"
          defaultValue={result}
          className="result"
          disabled
        />
      </div>
    </>
  );
}
