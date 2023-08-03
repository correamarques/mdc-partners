import { Button } from "reactstrap";
import { Header } from "../components/shared/Header";
import { useState } from "react";

export default function Table() {
  const [number, setNumber] = useState<number>();
  const [rows, setRows] = useState<JSX.Element[]>();
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleGenerateTable = () => {
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

  const handleWordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowResult(false);
    setNumber(Number(event.target.value));
  };

  const pageInfo = () => {
    return (
      <div className="pageInfo">
        <h1 data-testid="title" className="text-center">
          Table
        </h1>
        <p data-testid="description" className="text-center">
          Create a program that receives a number from the user and displays the
          table of that number, from 1 to 10.
        </p>
      </div>
    );
  };

  return (
    <>
      <Header />
      {pageInfo()}
      <div className="flex-container">
        <input
          type="number"
          min={1}
          max={10}
          data-testid="input-rows"
          placeholder="Type the number of rows to be generated"
          style={{ width: 800 }}
          defaultValue={number}
          onChange={handleWordChanged}
        />
        <Button
          color="secondary"
          data-testid="button"
          onClick={handleGenerateTable}
        >
          Generate table
        </Button>
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
