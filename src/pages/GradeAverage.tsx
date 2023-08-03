import { useState } from "react";
import Header from "../components/shared/Header";
import { NavigationBar } from "../components/shared/NavigationBar";

export default function GradeAverage() {
  const [grade1, setGrade1] = useState<number>();
  const [grade2, setGrade2] = useState<number>();
  const [grade3, setGrade3] = useState<number>();
  const [result, setResult] = useState<string>("");

  const handleOnChangeGrade1 = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGrade1(Number(event.target.value));

  const handleOnChangeGrade2 = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGrade2(Number(event.target.value));

  const handleOnChangeGrade3 = (event: React.ChangeEvent<HTMLInputElement>) =>
    setGrade3(Number(event.target.value));

  const handleOnClickCalcAverage = () => {
    if (grade1 !== undefined && grade2 !== undefined && grade3 !== undefined) {
      const average = (grade1 + grade2 + grade3) / 3;
      setResult(average.toString());
    }
  };

  return (
    <>
      <NavigationBar />
      <Header
        title="Grade Average"
        description="Create a program that takes a student's grades in three different subjects and calculates the average of the grades. Then display the calculated average."
      />
      <div className="flex-container">
        <input
          type="number"
          data-testid="grade-1"
          placeholder="Type number here"
          defaultValue={grade1}
          onChange={handleOnChangeGrade1}
        />
        <input
          type="number"
          data-testid="grade-2"
          placeholder="Type number here"
          defaultValue={grade2}
          onChange={handleOnChangeGrade2}
        />
        <input
          type="number"
          data-testid="grade-3"
          placeholder="Type number here"
          defaultValue={grade3}
          onChange={handleOnChangeGrade3}
        />
        <button
          type="button"
          data-testid="button"
          onClick={handleOnClickCalcAverage}
          style={{ width: "200px" }}
        >
          Calc average
        </button>
        <input
          type="text"
          data-testid="result"
          defaultValue={result}
          placeholder="The result will appear here"
          disabled
          style={{ width: "200px" }}
        />
      </div>
    </>
  );
}
