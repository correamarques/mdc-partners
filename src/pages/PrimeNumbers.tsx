import { useState } from "react";
import { NavigationBar } from "../components/shared/NavigationBar";
import Header from "../components/shared/Header";

export default function PrimeNumbers() {
  const [number, setNumber] = useState<number>();
  const [result, setResult] = useState<string>("");
  const [primeNumbers, setPrimeNumbers] = useState<string>("");

  const isPrime = (number: number): boolean => {
    if (number < 2) return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  const handleIOnClickIsPrime = () => {
    if (number === undefined) {
      setResult("Please type a number first");
    } else {
      const prime = isPrime(number);
      if (prime) {
        setResult("yes");
      } else {
        setResult("no");
      }
    }
  };

  const handleOnChangeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
    setResult("");
  };

  const handlePrintTenPrimeNumbers = () => {
    setPrimeNumbers("2, 3, 5, 7, 11, 13, 17, 19, 23, 29");
  };

  const divCheckIfIsPrimeNumber = () => {
    return (
      <div className="flex-container">
        <input
          type="number"
          data-testid="number"
          placeholder="Type number here"
          defaultValue={number}
          onChange={handleOnChangeNumber}
        />
        <button
          type="button"
          data-testid="button"
          onClick={handleIOnClickIsPrime}
          style={{ width: "200px" }}
        >
          Is prime?
        </button>
        <input
          type="text"
          data-testid="result"
          defaultValue={result}
          className="result"
          disabled
        />
      </div>
    );
  };

  const divPrintTheFirstTenPrimeNumbers = () => {
    return (
      <div className="flex-container" style={{ marginTop: "10px" }}>
        <button
          type="button"
          data-testid="button"
          onClick={handlePrintTenPrimeNumbers}
        >
          Print the first 10 prime numbers
        </button>
        <input
          type="text"
          data-testid="prime-numbers"
          defaultValue={primeNumbers}
          disabled
          style={{ width: "230px" }}
        />
      </div>
    );
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Prime Numbers"
        description="Write a function that checks whether a number is prime or not. Then create a program that prints the first 10 prime numbers."
      />
      {divCheckIfIsPrimeNumber()}
      {divPrintTheFirstTenPrimeNumbers()}
    </>
  );
}
