import { Button } from "reactstrap";
import { Header } from "../components/shared/Header";
import { useState } from "react";

export default function Palindrome() {
  const [word, setWord] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleIsPalindrome = () => {
    const chars = word.split("");
    const reverse = [...chars.reverse()];
    const isPalindrome = JSON.stringify(chars) === JSON.stringify(reverse);
    setResult(isPalindrome ? "yes" : "no");
  };

  const handleWordChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWord(event.target.value);
    setResult("");
  };

  const pageInfo = () => {
    return (
      <div className="pageInfo">
        <h1 data-testid="title" className="text-center">
          Palindrome
        </h1>
        <p data-testid="description" className="text-center">
          Create a function that checks whether a word is a palindrome (that is,
          whether it reads the same backwards and forwards). The program must
          ask the user for a word and inform whether or not it is a palindrome.
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
          type="text"
          data-testid="palindrome"
          placeholder="Type the word of phrase here"
          style={{ width: 800 }}
          defaultValue={word}
          onChange={handleWordChanged}
        />
        <Button
          color="secondary"
          data-testid="button"
          onClick={handleIsPalindrome}
        >
          Is palindrome?
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
