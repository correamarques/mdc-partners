import { NavigationBar } from "../components/shared/NavigationBar";
import { useState } from "react";
import Header from "../components/shared/Header";

export default function Table() {
  const [number, setNumber] = useState<number>();
  const [rows, setRows] = useState<JSX.Element[]>();
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleOnClickGenerateTable = () => {
    if (number !== undefined) {
      const data: JSX.Element[] = [];
      for (let i = 1; i <= 10; i++) {
        const result = number * i;
        data.push(
          <tr key={i}>
            <td data-testid={`number-${i}`}>{number}</td>
            <td>*</td>
            <td>{i} =</td>
            <td data-testid={`result-${i}`}>{result}</td>
          </tr>
        );
      }
      setRows(data);
      setShowResult(true);
    }
  };

  const handleOnChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowResult(false);
    setNumber(Number(event.target.value));
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Table"
        description="Create a program that receives a number from the user and displays the table of that number, from 1 to 10."
      />
      <div className="flex-container">
        <input
          type="number"
          min={1}
          max={10}
          data-testid="input-rows"
          placeholder="Type the number to generate the multiplication table"
          style={{ width: 800 }}
          defaultValue={number}
          onChange={handleOnChangeWord}
        />
        <button
          type="button"
          data-testid="button"
          onClick={handleOnClickGenerateTable}
          style={{ width: "200px" }}
        >
          Generate table
        </button>
      </div>
      {showResult && (
        <table>
          <thead>
            <tr>
              <th colSpan={4}>Table of {number} is:</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      )}
    </>
  );
}
