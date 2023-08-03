import { NavigationBar } from "../components/shared/NavigationBar";
import { useState } from "react";
import Header from "../components/shared/Header";

export default function Factorial() {
  const [number, setNumber] = useState<number>();
  const [factorial, setFactorial] = useState<number>();

  const calculateFactorial = (n: number): number =>
    n === 0 || n === 1 ? 1 : n * calculateFactorial(n - 1);

  const handleOnClickCalculate = () => {
    if (number !== undefined) {
      const result = calculateFactorial(number);
      setFactorial(result);
    }
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Factorial"
        description="Write a function to calculate the factorial of a number. Next, create a program that allows the user to enter a number and displays the corresponding factorial."
      />
      <div className="flex-container">
        <input
          type="number"
          name="number"
          id="number"
          data-testid="number"
          placeholder="Type number here"
          defaultValue={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          required
        />
        <button
          type="button"
          data-testid="button"
          onClick={handleOnClickCalculate}
          style={{ width: "200px" }}
        >
          Calculate
        </button>
        <input
          type="text"
          data-testid="result"
          defaultValue={factorial}
          placeholder="The result will appear here"
          disabled
          style={{ width: "200px" }}
        />
      </div>
    </>
  );
}
