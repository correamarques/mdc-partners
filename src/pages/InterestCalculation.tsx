import { useState } from "react";
import Header from "../components/shared/Header";
import { NavigationBar } from "../components/shared/NavigationBar";

export default function InterestCalculation() {
  const [initialCapital, setInitialCapital] = useState<number>();
  const [interestRate, setInterestRate] = useState<number>();
  const [investmentTime, setInvestmentTime] = useState<number>();
  const [result, setResult] = useState<string>("");

  const handleOnClickCalcInvestment = () => {
    if (
      initialCapital != undefined &&
      interestRate !== undefined &&
      investmentTime !== undefined
    ) {
      const factor = 1 + interestRate / 100;
      const amount = initialCapital * Math.pow(factor, investmentTime);
      setResult(amount.toString());
    }
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Interest Calculation"
        description="Create a function that calculates the final value of an investment based on initial capital, interest rate, and investment time (in months). The program must prompt the user for these values and display the final value."
      />
      <div className="flex-container">
        <input
          type="number"
          data-testid="initialCapital"
          min={1}
          placeholder="Type Initial Capital"
          defaultValue={initialCapital}
          onChange={(e) => setInitialCapital(Number(e.target.value))}
        />
        <input
          type="number"
          data-testid="interestRate"
          min={1}
          placeholder="Type Interest Rate"
          defaultValue={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
        <input
          type="number"
          data-testid="investimentTime"
          min={1}
          placeholder="Type Investiment Time (in months)"
          defaultValue={investmentTime}
          onChange={(e) => setInvestmentTime(Number(e.target.value))}
          style={{ width: 300 }}
        />
        <button
          type="button"
          data-testid="button"
          onClick={handleOnClickCalcInvestment}
          style={{ width: "200px" }}
        >
          Calc Investment
        </button>
        <input
          type="text"
          data-testid="result"
          defaultValue={result}
          className="result"
          disabled
          placeholder="The result will appear here"
        />
      </div>
    </>
  );
}
